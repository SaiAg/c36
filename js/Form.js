class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1');
        title.html('CAR RACING GAME!');
        title.position(250,20);

        var input=createInput("Name: ");
        var button=createButton("Play");

        input.position(250,250);
        button.position(250,280);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();

            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting=createElement("h2");
            greeting.html("Hello "+name);
            greeting.position(200,200);
        })
    }
}