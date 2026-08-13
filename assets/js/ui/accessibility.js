let sequence=0;
function enhance(root=document){root.querySelectorAll('.field').forEach(field=>{const label=field.querySelector('label'),control=field.querySelector('input,select,textarea');if(!label||!control)return;if(!control.id)control.id=`field-${++sequence}`;label.htmlFor=control.id});root.querySelectorAll('.modal').forEach(dialog=>{const first=dialog.querySelector('input,select,textarea,button');if(first&&!dialog.dataset.focusReady){dialog.dataset.focusReady='true';requestAnimationFrame(()=>first.focus())}})}
new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(n=>{if(n.nodeType===1)enhance(n)}))).observe(document.documentElement,{childList:true,subtree:true});
enhance();
