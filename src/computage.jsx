import * as THREE from 'three';
import React from 'react';
import App from './App.jsx';

function MakeFace (_a, _b, _c, _d)  
    {
        var triA = new THREE.Triangle(_a,_b,_c);
        var triB = new THREE.Triangle(_a,_d,_b);
        return [triA,triB];
    }
    function MakeTri (_a, _b, _c)  
    {
        var triA = new THREE.Triangle(_a,_b,_c);
        
        return [triA];
    }
   
    export class ActionMachine
    {
        
        constructor()
        {
            console.log("COnstructeur");
            this.rnd =Math.random()*10;
            
        }
        
        Act(_name)
        {
            console.log(_name);
            switch(_name)
            {
            case 'Menu':
            {console.log(_name + "  LOLOL" + this.rnd + "   " + this.rnd*Math.random())}
            break;
            case 'Doc':
            {console.log(_name + "  LOLOL" + this.rnd + "   " + this.rnd*Math.random())}
            break;
            case 'About':
            {console.log(_name+ "  LOLOL" + this.rnd + "   " + this.rnd*Math.random())}
            break;
            }
        }
    }
export class Voronoi 
{
    
    constructor(size,randomness)
    {
        this.size = size;
        this.randomness = randomness;
        this.points = new Float32Array((size*size)*3);
        this.triangles = new Array(((size-1)*(size-1))*2);
    }
    MakeVoronoi()
    {
        let index = 0;
    for(let y = 0;y<this.size;y++)
        {
            for(let x = 0;x<this.size;x++)
                {

                    let randomX = 1-(Math.random()*this.randomness);
                    let randomY = 1-(Math.random()*this.randomness);
                    this.points[index] = x + randomX;
                    this.points[index+1] = 0;
                    this.points[index+2] = y + randomY;
                    
                    index+=3;
                }
        }
        index = 0;
        for(let yy = 0; yy<this.size;yy+=3)
        {
            for(let xx = 0; xx<this.size;xx+=3)
            {
                this.triangles[index] = MakeTri(index,index+1, index+2)
            }
        }
        let geometry = new THREE.BufferGeometry(this.points,this.triangles)
        geometry.setAttribute( 'position', new THREE.BufferAttribute( this.points, 3 ) );
        geometry.setIndex = this.triangles;
        let material = new THREE.MeshStandardMaterial();
        let obj = new THREE.Mesh(geometry,material);
        let debugstr = "";
        
        // return obj;
        // _mainMesh = obj;
        
    }
}

