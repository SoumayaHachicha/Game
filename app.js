
    const world = document.querySelector("#gameBoard");
    const c = world.egtContext("2d")

    world.width = world.clientWidth;
    world.Height = world.clientHeight;

    let frames=0;

    const keys = {
        ArrowLeft:{  pressed:false},
        ArrowRight:{pressed:false},
    }

    class Player{
    }

    const player = new Player();

    //Boucle d'animation
    const animationLoop = ()=> {
    }
    animationLoop();

    // addEventListener('keydown',({key}))=> {
    //   })
