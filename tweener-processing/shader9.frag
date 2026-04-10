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
    vec2 d = abs(vec2(length(p.yz),p.x)) - h;
    return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}
float box( vec3 p, vec3 b )
{
    vec3 d = abs(p) - b;
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
}

float getThickness(vec3 p){

float x = p.x;
x = map2(x,-1,1,0,1);

float result =0;

// in x = 1 -> result = 1;  result = x0+x1+x2+x3+x4+x5+x6+x7;

result=getY(x);
result = map2(result,0,1,0,.58);
//result+=sin(x*525)*.002;

result = clamp(result,0.,1.5);



//result= max(min(result,1),0);
//result = .2;

return result;
}

float map( in vec3 pos )
{   float thickness = .5;
    thickness = getThickness(pos);
    float length = .99;
    //thickness=mix(.25,thickness,.8+sin(integrate*.5));
    
    //thickness = .5;
    float d = cylinder(pos,vec2(thickness,length) );
    float d1 = box(vec3(pos.x,pos.y-.5,pos.z),vec3(1.5,.5,1));
    //d = cylinder(pos,vec2(thickness,length));
    return d;//max(d1,d);
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
     col = vec3(0.0);

    if ( raymarch(ro, rd, dist, nor) )
    {
        vec3 pos = ro + dist*rd;

  
        
        float ao = calcAO( pos, nor );

        float amb = clamp( 0.5+0.5*nor.y, 0.0, 1.0 );
        float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
        float bac = clamp( dot( nor, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-pos.y,0.0,1.0);
        float pp = clamp( dot( reflect(rd,nor), lig ), 0.0, 1.0 );
        float spe = pow(pp,16.0);
        float fre = ao*pow( clamp(1.0+dot(nor,rd),0.0,1.0), 2.0 );

        col= col + vec3(.7500,0.750,0.50)*spe + 0.01752*fre;



    }
    else
    {
        col = vec3(.006);//vec3(background);
    }

    return vec3( clamp(col,0.0,1.0) );
}

float getTime(float x){
    float result=abs(((x0+(x1)*pow(x,1)+(x2)*pow(x,2)+(x3)*pow(x,3)+(x4)*pow(x,4)+(x5)*pow(x,5)+(x6)*pow(x,6)+(x7)*pow(x,7)+(x8)*pow(x,8))));
    result = max(min(1,result),0);
    return result;
}

void main()
{   vec2 q = gl_FragCoord.xy/iResolution.xy;
    vec2 p = -1.0+2.0*q;
    p.x *= iResolution.x/iResolution.y;
         
    

    // camera   
    float mouseL = map2(1,0,1000,-1,7);
    float cameraX = sin(integrate*.5);
    float cameraY = sin(integrate*.25);
    cameraX= map2(cameraX,-1,1,0,.8);
    //cameraX = 2;
    vec3 ro = vec3(cameraX, cameraY,0 );
    float move = getTime(sin(integrate));
    move = sin(integrate*.2);
    ro = vec3(cameraX,cameraY,4);
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