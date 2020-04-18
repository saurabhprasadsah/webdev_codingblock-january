let obj { 
    a;10,
    b;20,
    c;"objects";
   h: {p=10,
       q=20, 
       r {
          x="value"; 
       }
       console.log(obj.r.r.x)

    }
}