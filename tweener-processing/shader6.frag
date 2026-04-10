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

float getThickness(float p){

    float x =  p;
    x = map2(x,-1,1,0,1);

    // in x = 1 -> result = 1;  result = x0+x1+x2+x3+x4+x5+x6+x7;

    float result =getY(x);

    result = map2(result,0,1,0,.9);
    result+=sin(x*525)*.002;
    return result;
}

float map( in vec3 pos )
{   float thickness = .5;
    thickness = getThickness(-pos.y);
    float length = .98;
    float d = sdSphere( pos, 0.35 );
    d = box(pos,vec3(thickness,length,length));
    return d;
}


// Colorizing
vec4 map2( vec3 p )
{
    p.x += 0.5*sin( 3.0*p.y );
    p.y += 0.5*sin( 3.0*p.z );
    p.z += 0.5*sin( 3.0*p.x );
    p.x += 0.5*sin( 3.0*p.y );
    p.y += 0.5*sin( 3.0*p.z );
    p.z += 0.5*sin( 3.0*p.x );
    p.x += 0.5*sin( 3.0*p.y );
    p.y += 0.5*sin( 3.0*p.z );
    p.z += 0.5*sin( 3.0*p.x );
    p.x += 0.5*sin( 3.0*p.y );
    p.y += 0.5*sin( 3.0*p.z );
    p.z += 0.5*sin( 3.0*p.x );

    float d1 = length(p) - 1.0*smoothstep(0.0,2.0,.5);;
    d1 *= 0.02; 

    return vec4( d1, p );
}

float calcOcc( vec3 pos, vec3 nor )
{
    float h = 0.2;
    float ao = 0.0;
    for( int i=0; i<8; i++ )
    {
        vec3 dir = sin( float(i)*vec3(1.0,7.13,13.71)+vec3(0.0,2.0,4.0) );
        //dir = normalize(nor + dir);
        dir *= sign(dot(dir,nor));
        float d = map2( pos + h*dir ).x;
        ao += max(0.0,h-d*2.0);
    }
    return clamp( 4.0 - 2.5*ao, 0.0, 1.0 )*(0.5+0.5*nor.y);
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

vec3 lights ( vec3 cd, vec3 Norm, float occ,vec3 ref, vec4 c, vec3 p ){    
    vec3 colorReflection = vec3(.9,1,1);
    
    float fre = clamp( 1.0 + dot(Norm,cd), 0.0, 1.0 );
    float spe = pow(max( dot(-cd,Norm),0.0),16.0);

    c.xyz += vec3(1*pow(spe,20)*occ*c.x);
    
    return c.xyz;
}

float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax )
{
    float res = 1.0;
    float t = mint;
    for( int i=0; i<16; i++ )
    {
        float h = map( ro + rd*t ).x;
        res = min( res, 8.0*h/t );
        t += clamp( h, 0.02, 0.10 );
        if( h<0.001 || t>tmax ) break;
    }
    return clamp( res, 0.0, 1.0 );
}

vec3 colorize(vec3 cp, vec3 rd, float d,vec3 n,vec3 p,vec3 col){
    float occ = calcAO( p, n );
    vec3  lig = normalize( vec3(-0.6, 0.7, -0.5) );
    float amb = clamp( 0.5+0.5*n.y, 0.0, 1.0 );
    float dif = clamp( dot( n, lig ), 0.0, 1.0 );
    float bac = clamp( dot( n, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-p.y,0.0,1.0);
    float fre = pow( clamp(1.0+dot(n,rd),0.0,1.0), 2.0 );
    float spe = pow(clamp( dot( n.y, lig.x ), 0.0, 1.0 ),16.0);
    
    dif *= softshadow( p, lig, 0.02, 2.5 );
    //dom *= softshadow( p, reflRay, 0.02, 2.5 );

    vec3 brdf = vec3(0.0);
    brdf += 1.20*dif*vec3(1.00,0.90,0.60);
    brdf += 1.20*spe*vec3(1.00,0.90,0.60)*dif;
    brdf += 0.30*amb*vec3(0.50,0.70,1.00)*occ; 
    brdf += 0.30*bac*vec3(0.25,0.25,0.25)*occ;
    brdf += 0.40*fre*vec3(1.00,1.00,1.00)*occ;
    brdf += 0.02;
    col = col*brdf;
    //
    
    col = mix( col, vec3(0.8,0.9,1.0), 1.0-exp( -0.0005*d*d ) );

    
    //col = mix(col, map(p).yzw, 0.5);
    return col;
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
        
        float ao = calcOcc( pos, nor );
        float occ = calcOcc(pos,nor);
        float amb = clamp( 0.5+0.5*nor.y, 0.0, 1.0 );
        float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
        float bac = clamp( dot( nor, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-pos.y,0.0,1.0);

        vec3 brdf = vec3(0.0);
        brdf += .20*amb*vec3(0.20,0.22,0.26)*ao;
        brdf += 1.20*amb*vec3(0.120,0.122,0.126)*ao;
        brdf += 0.20*bac*vec3(0.15,0.215,0.515)*ao;
        brdf += 1.00*dif*vec3(.9200,01.0,0.70);

        float pp = clamp( dot( reflect(rd,nor), lig ), 0.0, 1.0 );
        float spe = pow(pp,6.0);
        float fre = ao*pow( clamp(1.0+dot(nor,rd),0.0,1.0), 2.0 );

        col = col*brdf + vec3(0.98)*vec3(.500,0.50,0.50)*spe + 0.2*fre*(0.5+0.5*col);

        float fre2 = clamp( 1.0 + dot(nor,rd), 0.0, 1.0 );
        float spe2 = pow(max( dot(-rd,nor),0.0),16.0);

        col.xyz += vec3(1*pow(spe2,20)*occ*col.x);
        //col = mix( col, sky, 1.0-exp(-0.0025*dist*dist*dist) );
        
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
    float cameraY = sin(integrate*.25);
    cameraX= map2(cameraX,-1,1,-1.5,1.5);
    //cameraX = 2;
    vec3 ro = vec3(cameraX, cameraY,0 );
    ro = vec3(cameraX,cameraY,7);
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