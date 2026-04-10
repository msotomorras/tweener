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

float clamp1(float val, float min_val, float max_val){
    float x=0;
    x = max(min(val,max_val),min_val);
    return x;
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

float cylinder2(vec3 p,vec2 h){
        vec2 d = abs(vec2(length(p.xz),p.y)) - h;
    return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}

float cylinder(vec3 p, vec2 h){
    vec2 d = abs(vec2(length(p.yz),p.x)) - h;
    return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}

float box( vec3 p, vec3 b )
{
    vec3 d = abs(p) - b;
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
}

float getThickness(vec3 p){

float x =  -p.y;
x = map2(x,-1,1,0,1);


float result =getY(x);
//result += sin(result*3.14*15)*.1;
float y = p.y*.01;

result = map2(result,0,1,0,.525);
result = clamp1(result,0,1);
return result;
}

float map( in vec3 pos )
{   float thickness = .5;
    thickness = getThickness(pos);
    float length = 1;
    float d = 0;//sdSphere( pos, 0.35 );
    d = cylinder2(pos,vec2(thickness,length));
    //d = box(pos,vec3(thickness,1,thickness));
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
    for (int steps=0; steps < 30; steps++)
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
  
    
    sky = vec3(0.006);
    //
    if ( raymarch(ro, rd, dist, nor) )
    {   col = vec3(.041);
        vec3 pos = ro + dist*rd;

        //col = vec3(.15,.15,getY(map2(pos.x,-1,1,0,1)));
        
        float ao = calcAO( pos, nor );

        float amb = clamp( 0.5+0.5*nor.y, 0.0, 1.0 );
        float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
        float bac = clamp( dot( nor, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-pos.y,0.0,1.0);

        vec3 brdf = vec3(0.0);
//      brdf += 2.20*amb*vec3(0.20,0.22,0.26)*ao;
        brdf += 1.20*amb*vec3(0.20,0.22,0.26)*ao;
        brdf += 01.20*bac*vec3(0.15,0.15,0.15)*ao;
        brdf += 1.00*dif*vec3(.7900,0.90,0.70);

        float pp = clamp( dot( reflect(rd,nor), lig ), 0.0, 1.0 );
        float spe = pow(pp,16.0);
        float fre = ao*pow( clamp(1.0+dot(nor,rd),0.0,1.0), 2.0 );

        col = col*brdf + 2*vec3(.800,0.70,0.60)*spe + 0.07*fre*(0.5+0.5*col);

        col+=vec3(spe);

        //col = col*spe;

        /* vec3 pos = ro + dist*rd;

  
        
        float ao = calcAO( pos, nor );

        float amb = clamp( 0.5+0.5*nor.y, 0.0, 1.0 );
        float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
        float bac = clamp( dot( nor, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-pos.y,0.0,1.0);
        float pp = clamp( dot( reflect(rd,nor), lig ), 0.0, 1.0 );
        float spe = pow(pp,16.0);
        float fre = ao*pow( clamp(1.0+dot(nor,rd),0.0,1.0), 2.0 );

        col= col + vec3(.7500,0.750,0.50)*spe + dif*0.01752*fre;*/

    }
    else
    {
        col = sky;
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
    float cameraY = sin(integrate*.25);
    cameraX= map2(cameraX,-1,1,-1,1);
    //cameraX = 2;
    vec3 ro = vec3(cameraX, cameraY,0 );
    ro = vec3(cameraX,cameraY,6);
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