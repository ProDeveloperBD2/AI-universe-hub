
const loadOpenapi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayOpenani(data.data.tools));
    toggleLoad(true);
};
const displayOpenani = (tools) => {
    const toolsContainer = document.getElementById('tools-container');
    console.log(tools);
    tools.forEach(tool => {
        const toolsDiv = document.createElement('div');
        toolsDiv.classList.add('col');
        toolsDiv.innerHTML = `
        <div class="card h-100">
            <img src="${tool.image}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="fw-bold">Features</h5>
               <ul>
               <li class="card-text">${tool.features ? tool.features[0] : 'Features is Not Found'}</li>
               <li class="card-text">${tool.features ? tool.features[1] : 'Features is Not Found'}</li>
               <li class="card-text">${tool.features ? tool.features[2] : 'Features is Not Found'}</li>
               </ul>
               <hr>
               <h5 class="card-title">${tool.name ? tool.name : 'Name Not Found'}</h5>
       <div class="d-flex">
         <div class="d-flex">
           <svg class="w-css" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
           </svg>
           <p class="ms-2 mt-3"><small>${tool.published_in ? tool.published_in : 'release date is not found'}</small></p>
        </div>
        <div class="ms-css">
          <a onclick="loadOpenapiModal('${tool.id}')" class="btn rounded-pill bg-danger-subtle" data-bs-toggle="modal" data-bs-target="#toolsModal">
          <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
             
             

          </div>
          </div>
        `;
        toolsContainer.appendChild(toolsDiv);
    })
    toggleLoad(false);
};
const loadOpenapiModal = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayOpenapiModal(data.data));

}
const displayOpenapiModal = (displayModal) => {
    console.log(displayModal)
    const toolsModalTitle = document.getElementById('toolsModalLabel');
    toolsModalTitle.innerText = displayModal.tool_name;
    const toolsBody = document.getElementById('tools-body');
    toolsBody.innerHTML = `
    
    <div class="d-flex gap-2">
        <div class="bg-danger-subtle px-3 py-3 rounded border-css">
           <h6 class="mb-4">${displayModal.description}</h6>
           <div class="d-flex gap-4">
               <div class="bg-white px-1 px-3 py-1 heigth-css rounded fw-medium text-success">
               <p class="text=center me-css mt-2"><small>${displayModal.pricing[0] ? displayModal.pricing[0].price : 'Price is not Found'}</small></p>
               <p class="text=center me-css mt-css"><small>${displayModal.pricing[0] ? displayModal.pricing[0].plan : 'Plan is not Found'}</small></p>
               </div>
               <div class="bg-white px-1 px-3 py-1 heigth-css rounded fw-medium text-warning">
               <p class="text=center me-css mt-2"><small>${displayModal.pricing[1] ? displayModal.pricing[1].price : 'Price is not Found'}</small></p>
               <p class="text=center me-css mt-css"><small>${displayModal.pricing[1] ? displayModal.pricing[1].plan : 'Plan is not Found'}</small></p>
               </div>
               <div class="bg-white px-1 width-css px-3 py-1 heigth-css rounded fw-medium text-danger">
               <p class="text=center me-css mt-css2"><small>${displayModal.pricing[2] ? displayModal.pricing[2].price : 'Price is not Found'}</small></p>
               <p class="text=center me-css mt-css1"><small>${displayModal.pricing[2] ? displayModal.pricing[2].plan : 'Plan is not Found'}</small></p>
               </div>
           </div>
            <div class="d-flex gap-5 mt-3">
               <div>
                  <h5 class="fw-bold">Features</h5>
                  <ul class="fw-medium text-gray">
                    <li>${displayModal.features[1] ? displayModal.features[1].feature_name : 'No found'}</li>
                    <li>${displayModal.features[2] ? displayModal.features[1].feature_name : 'No found'}</li>
                    <li>${displayModal.features[3] ? displayModal.features[1].feature_name : 'No found'}</li>
                  </ul >
               </div >
    <div ms-5>
        <h5 class="fw-bold">Integrations</h5>
        <ul class="fw-medium text-gray">
            <li>${displayModal.integrations ? displayModal.integrations[0] : 'No Found'}</li>
            <li>${displayModal.integrations ? displayModal.integrations[1] : 'No Found'}</li>
            <li>${displayModal.integrations ? displayModal.integrations[2] : 'No Found'}</li>
            
        </ul>
    </div>
            </div >
        </div >
    <div class="width-css2">
        <img class="img-fluid mb-3" src="${displayModal.image_link ? displayModal.image_link[0] : 'not found'}">
            <h5>${displayModal.input_output_examples[0] ? displayModal.input_output_examples[0].input : 'No Found'}</h5>
            <p>${displayModal.input_output_examples[0] ? displayModal.input_output_examples[0].output : 'No Found'}</p>
    </div>
    </div >

    `;


}


const toggleLoad = isLoads => {
    const loader = document.getElementById('loader');
    if (isLoads) {
        loader.classList.remove('d-none');
    }
    else {
        loader.classList.add('d-none');
    }
};

loadOpenapi();
