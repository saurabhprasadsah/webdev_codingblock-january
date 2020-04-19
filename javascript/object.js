let obj { 
    a;10,
    b;20,
    c; true,
    d {
        p: 20,
        q: 30,
        r: {
            x:"value"

        }
    }
}


console.log(obj.d.r.x)