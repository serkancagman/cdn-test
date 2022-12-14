const mainElement = document.getElementById('TreeContent');
const baseUrl = "https://tree-jungle.herokuapp.com/api"

console.log(mainElement);
const getTree = async () => {
    const response = await fetch(`${baseUrl}/tree/three_forest_jungle@natural.com`);
    const data = await response.json();
    const tree = data[0];
   if(tree) {
    CreateContent(tree);
   }
   else {
       mainElement.innerHTML = "Ağaç bulunamadı";
   }
}
const CreateContent = (tree) => {
    const treeElement = document.createElement('div');
    const treeNameElement = document.createElement('h6');
    const treeQuantityElement = document.createElement('p');
    const treeImageElement = document.createElement('img');
    const treeSubElement = document.createElement('div');

    // MAIN ELEMENT
    treeElement.style.backgroundColor = '#F8FCFA';
    treeElement.style.display = "block";
    treeElement.style.height = '70px';
    treeElement.style.width = '200px';
    treeElement.style.margin = '10px';
    treeElement.style.borderRadius = '0';
    treeElement.style.display = 'flex';
    treeElement.style.justifyContent = 'center';
    treeElement.style.alignItems = 'center';
    treeElement.style.color = 'black';
    treeElement.style.border = '2px solid #3D8361';
    treeElement.style.boxShadow = '0 0 3px #3D8361';
    
   
    // IMAGE ELEMENT
    treeImageElement.src = "https://i.im.ge/2022/09/16/1FdlJC.tree-green.gif";
    treeImageElement.style.width = '100px';
    treeImageElement.style.height = 'auto';
    treeImageElement.style.margin = '0';
  

    // NAME ELEMENT
    treeNameElement.innerText = "Ekilen Ağaç";
    
    treeNameElement.style.color = 'black';
    treeNameElement.style.fontSize = '14px';
    treeNameElement.style.fontWeight = 'bold';
    treeNameElement.style.fontFamily = 'sans-serif';
    treeNameElement.style.textAlign = 'center';
    treeNameElement.style.margin = '0px';
    treeNameElement.style.padding = '3px';
    treeNameElement.style.backgroundColor = '#F8FCFA';

   
 // SUB ELEMENT
    treeSubElement.style.display = 'flex';
    treeSubElement.style.justifyContent = 'space-between';
    treeSubElement.style.width = '100%';
    treeSubElement.style.alignItems = 'center';
    treeSubElement.style.flexDirection = 'column';
    treeSubElement.style.backgroundColor = '#F8FCFA';
    treeSubElement.style.padding = '5px';
 
    // QUANTITY ELEMENT

    treeQuantityElement.innerText = tree.quantity;
    treeQuantityElement.style.margin = '0px';
    treeQuantityElement.style.color = 'black';
    treeQuantityElement.style.backgroundColor = '#F8FCFA';
    
    treeSubElement.appendChild(treeNameElement);
    treeSubElement.appendChild(treeQuantityElement);
    treeElement.appendChild(treeImageElement);
    mainElement.appendChild(treeElement);
    treeElement.appendChild(treeSubElement);
}
document.addEventListener('DOMContentLoaded', () => {
getTree();
});