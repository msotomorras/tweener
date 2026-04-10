/////////////////////////////////
// XBE
// Deformed
// Sphere + Plane + Noise
//
uniform float background;
uniform vec2 iResolution;
uniform float integrate;
uniform float mouseX;


uniform float x0;
uniform float x1;
uniform float x2;
uniform float x3;
uniform float x4;
uniform float x5;
uniform float x6;
uniform float x7;
uniform float x8;


float getY(float x){
    float result =abs(((x0+(x1)*pow(x,1)+(x2)*pow(x,2)+(x3)*pow(x,3)+(x4)*pow(x,4)+(x5)*pow(x,5)+(x6)*pow(x,6)+(x7)*pow(x,7)+(x8)*pow(x,8))));
    return result;
}

float map2(float value,
                             float istart,
                             float istop,
                             float ostart,
                             float ostop) {
   return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

float sdSphere( vec3 p, float s )
{
    return length(p)-s;
}

float cylinder(vec3 p, vec2 h){
  vec2 d = abs(vec2(length(p.xz),p.y)) - h;
  return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}

float getThickness(float p){

    float x =  (p);
    x = map2(x,-1,1,0,1);

    // in x = 1 -> result = 1;  result = x0+x1+x2+x3+x4+x5+x6+x7;

    float result =getY(x);
    result = map2(result,0,1,0,.9);

return result;
}

vec3 getP(vec3 pos){
    float x = pos.y;
    x = map2(x,-1,1,0,1);
    float result =abs(((x0+(x1)*pow(x,1)+(x2)*pow(x,2)+(x3)*pow(x,3)+(x4)*pow(x,4)+(x5)*pow(x,5)+(x6)*pow(x,6)+(x7)*pow(x,7)+(x8)*pow(x,8))));
    return pos;
}

float map( in vec3 pos )
{   float thickness = .5;
    thickness = getThickness(pos.x);
    float thickness2 = getThickness(pos.y);
    float length = .99;
    float d = sdSphere( pos, 0.35 );
    d = cylinder(pos,vec2(.99,thickness));
    return d;
}

vec3 calcNormal( in vec3 pos )
{
    vec3 eps = vec3(0.001,0.0,0.0);
    return normalize( vec3(
        map(pos+eps.xyy) - map(pos-eps.xyy),
        map(pos+eps.yxy) - map(pos-eps.yxy),
        map(pos+eps.yyx) - map(pos-eps.yyx) ) );
}

// Raymarching
bool raymarch(vec3 origin, vec3 dir, out float dist, out vec3 norm)
{
    float epsilon = 0.003;
    float maxdist = 10.0;
    float marched = 0.0;
    float delta = 2.*epsilon;
    dist = -1.0;
    for (int steps=0; steps < 60; steps++)
    {
        if ( ( abs(delta) < epsilon ) || (marched > maxdist) ) continue;
        marched += delta;
        delta = map(origin + marched * dir);
    }
    bool res = false;
    if (marched < maxdist)
    {
        norm = calcNormal(origin + marched * dir);
        dist = marched;
        res = true;
    }
    return res;
}

float calcAO( in vec3 pos, in vec3 nor )
{
    float totao = 0.0;
    float sca = 1.0;
    for( int aoi=0; aoi<5; aoi++ )
    {
        float hr = 0.01 + 0.05*float(aoi);
        vec3 aopos =  nor * hr + pos;
        float dd = map( aopos );
        totao += -(dd-hr)*sca;
        sca *= 0.75;
    }
    return clamp( 1.0 - 4.0*totao, 0.0, 1.0 );
}

vec3 render( in vec3 ro, in vec3 rd )
{ 
    vec3 col = vec3(0.0);
    float dist = 0.;
    vec3 nor = vec3(0.,0.,0.);
    //
    vec3 lig = normalize( vec3(-0.6, 0.7, -0.5) );
    vec3 sky = vec3(0.32,0.36,0.4) - rd.y*0.4;
    float sun = clamp( dot(rd,lig), 0.0, 1.0 );
    sky += vec3(1.0,0.8,0.4)*0.5*pow( sun, 10.0 );
    sky *= 0.9;
    //
    if ( raymarch(ro, rd, dist, nor) )
    {
        vec3 pos = ro + dist*rd;

        col = vec3(.92);
        
        float ao = calcAO( pos, nor );

        float amb = clamp( 0.5+0.5*nor.y, 0.0, 1.0 );
        float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
        float bac = clamp( dot( nor, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-pos.y,0.0,1.0);

        vec3 brdf = vec3(0.0);
//      brdf += 2.20*amb*vec3(0.20,0.22,0.26)*ao;
        brdf += 1.20*amb*vec3(0.120,0.122,0.126)*ao;
        brdf += 0.20*bac*vec3(0.15,0.215,0.515)*ao;
        brdf += 1.00*dif*vec3(.9200,01.0,0.70);

        float pp = clamp( dot( reflect(rd,nor), lig ), 0.0, 1.0 );
        float spe = pow(pp,16.0);
        float fre = ao*pow( clamp(1.0+dot(nor,rd),0.0,1.0), 2.0 );

        col = col*brdf + vec3(0.98)*vec3(.500,0.50,0.50)*spe + 0.2*fre*(0.5+0.5*col);
        col = mix( col, sky, 1.0-exp(-0.0025*dist*dist*dist) );
        vec3 col1 = mix(col.xyz,vec3(.81,.7,.6),rd.x);
        col = col*(col1+spe);

        
    }
    else
    {
        col = vec3(.006);//vec3(background);
    }

    return vec3( clamp(col,0.0,1.0) );
}

void main()
{   vec2 q = gl_FragCoord.xy/iResolution.xy;
    vec2 p = -1.0+2.0*q;
    p.x *= iResolution.x/iResolution.y;
         
    

    // camera   
    float mouseL = map2(1,0,1000,-1,7);
    float cameraX = sin(integrate*.5);
    float cameraY = sin(integrate*.25)*1.5;
    cameraX= map2(cameraX,-1,1,-.5,2);
    cameraY= map2(cameraX,-1,1,-1,1.8);
    //cameraX = 2;
    //cameraY = 0;
    vec3 ro = vec3(cameraX, cameraY,7 );
    //ro = vec3(0,2,7);
    vec3 ta = vec3( 0.0, 0.0, 0.0 );
    
    // camera tx
    vec3 cw = normalize( ta-ro );
    vec3 cp = vec3( 0.0, 1.0, 0.0 );
    vec3 cu = normalize( cross(cw,cp) );
    vec3 cv = normalize( cross(cu,cw) );
    vec3 rd = normalize( p.x*cu + p.y*cv + 3.5*cw );

    vec3 col = render( ro, rd );
    col = sqrt(col);
    
    gl_FragColor=vec4( clamp(col,0.,1.), 1.0 );
}