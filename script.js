

const serverApiPath ="http://localhost:3000/events";
const listWrapperEl = document.getElementById('events-list');

const getEventsList = async (path) => {
    const response = await fetch (path,{
        mode:'cors'
    });
      
    return await response.json();
      
}



const renderEventRow = (event) => {
    const li = document.createElement('li');
    li.innerText = event.name;
    return li;
}



const renderEventsList =(list,parent) => {
for(let i=0; i<list.length; i++) {
    parent.appendChild(renderEventRow(list[i]));
    }
}

const render = async (path,el) => {
    try {

    const events = await getEventsList(path);
       console.log(events);
     
       
    renderEventsList(events,el);
    }catch(e) {
        console.error(e);
    }

}


 render(serverApiPath,listWrapperEl);

