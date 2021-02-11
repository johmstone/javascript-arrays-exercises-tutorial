let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let parnew = par.replace(/\s/g, '');

for(let i=0; i<parnew.length;i++){
    let letter = parnew[i].toLowerCase();
    
    if (!(letter in counts)){
        //Object.assign(counts,{[letter]: 1})
        counts[parnew[i]] = 1;
    } else {
       counts[letter]++;
    }    
} 
console.log(counts); 

