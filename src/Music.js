import './Book.css'

export function Music(){
    let Group = {
        name: "Queen",  
        members: [ 
            "Freddie Mercury Vocals, Piano",
            "Brian May Guitar, Vocals",
            "John Deacon Bass Guitar",
            "Roger Taylor Drums, Vocals"
        ],
        albums: [ 
            "A Night at the Opera",
            "News of the World",
            "The Game",
            "Bohemian Rhapsody" 
        ],
    }

    return(
        <div id='cont'>
                    <p>Name: {Group.name}</p>
                    <p>Members: </p>
                    <div>
                        <p>{Group.members[0]}</p>
                        <p>{Group.members[1]}</p>
                        <p>{Group.members[2]}</p>
                        <p>{Group.members[3]}</p>
                    </div>
                    <p>Albums: </p>
                    <div>
                        <p>{Group.albums[0]}</p>
                        <p>{Group.albums[1]}</p>
                        <p>{Group.albums[2]}</p>
                        <p>{Group.albums[3]}</p>  
                    </div>
                </div>
    );
}