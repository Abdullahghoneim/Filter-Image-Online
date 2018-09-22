//  get DOM Elements 

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

let image = new Image();

let fileName = '';

const downloadBtn  = document.getElementById('download-btn');

const uploadFile = document.getElementById('upload-file');

const revertBtn = document.getElementById('revert-btn');

// TODO: Filters

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('filter-btn')){
        console.log('Event Work........');
        if(e.target.classList.contains('brightness-add')){
            Caman('#canvas', img, function(){
                this.brightness(5).render();
            })
        }
        else if(e.target.classList.contains('brightness-remove')){
            Caman('#canvas', img, function(){
                this.brightness(-5).render();
            })
        }
        else if(e.target.classList.contains('contrast-add')){
            Caman('#canvas', img, function(){
                this.contrast(5).render();
            });
        }
        else if(e.target.classList.contains('contrast-remove')){
            Caman('#canvas', img, function(){
                this.contrast(-5).render();
            });
        }
        else if(e.target.classList.contains('saturation-add')){
            Caman('#canvas', img, function(){
                this.saturation(5).render();
            });
        }
        else if(e.target.classList.contains('saturation-remove')){
            Caman('#canvas', img, function(){
                this.saturation(-5).render();
            });
        }
        else if(e.target.classList.contains('vibrance-add')){
            Caman('#canvas', img, function(){
                this.vibrance(5).render();
            });
        }
        else if(e.target.classList.contains('vibrance-remove')){
            Caman('#canvas', img, function(){
                this.vibrance(-5).render();
            });
        }
        else if(e.target.classList.contains('vintage')){
            Caman('#canvas', img, function(){
                this.vintage().render();
            });
        }
        else if(e.target.classList.contains('lomo')){
            Caman('#canvas', img, function(){
                this.lomo().render();
            });
        }
        else if(e.target.classList.contains('clarity')){
            Caman('#canvas', img, function(){
                this.clarity().render();
            });
        }
        else if(e.target.classList.contains('sinCity')){
            Caman('#canvas', img, function(){
                this.sinCity().render();
            });
        }
        else if(e.target.classList.contains('crossPress')){
            Caman('#canvas', img, function(){
                this.crossProcess().render();
            });
        }
        else if(e.target.classList.contains('pinhole')){
            Caman('#canvas', img, function(){
                this.pinhole().render();
            });
        }
        else if(e.target.classList.contains('nostalgia')){
            Caman('#canvas', img, function(){
                this.nostalgia().render();
            });
        }
        else if(e.target.classList.contains('herMajesty')){
            Caman('#canvas', img, function(){
                this.herMajesty().render();
            });
        }
    }
});



uploadFile.addEventListener('change',(e) =>{
    //  get file
    const file = document.getElementById('upload-file').files[0];
    //  init file reader

    const reader = new FileReader();

    if(file){
        fileName = file.name;

        //  read data as URL
        reader.readAsDataURL(file);
    }

    //  add image to canvas 

    reader.addEventListener('load',()=>{
        // creat image 
        img = new Image();
        // set src
        img.src = reader.result;
        //  on image load , add to canvas 

        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height );
            canvas.removeAttribute('data-caman-id');
        }
    },false)

})


// //  add download EVENT 

// downloadBtn.addEventListener('click',(e)=>{
    
//     // get file EXt
//     const fileExtention = fileName.slice(-4);

//     // init new file namename

//     let fileName;

//     // check image type
//     if(fileExtention === '.jpg'|| fileExtention === '.png'){
//         newfileName = fileName.substring(0, fileName.length -4) + '-edite.jpg';
//     }

//     // call download 

//     download(canvas, newfileName);
// });

// //  download function 
// function download(canvas,fileName){
//     //  init  event 

//     let e ;

//     //  creat link 

//     const link = document.createElement('a');
//     // set property 

//     link.download = fileName;
//     link.href = canvas.toDataURL('image/jpeg', 0.8);
// // new mouse event 
// e = new MouseEvent('click');
// link.dispatchEvent(e);
// }


// Download Event
downloadBtn.addEventListener("click", () => {
    // Get ext
    const fileExtension = fileName.slice(-4);
  
    // Init new filename
    let newFilename;
  
    // Check image type
    if (fileExtension === ".jpg" || fileExtension === ".png") {
      // new filename
      newFilename = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
    }
  
    // Call download
    download(canvas, newFilename);
  });
  
  // Download
  function download(canvas, filename) {
    // Init event
    let e;
    // Create link
    const link = document.createElement("a");
  
    // Set props
    link.download = filename;
    link.href = canvas.toDataURL("image/jpeg", 0.8);
    // New mouse event
    e = new MouseEvent("click");
    // Dispatch event
    link.dispatchEvent(e);
  }
  





