const Grilla = {
    X = [],
    Y = [],
    
    crearGrilla(){
        for(let i=0; i < 8; i++ ){
            this.X.push(i);
            this.Y.push(i);
            console.log(this.X);
        }
    }
}