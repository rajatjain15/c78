var info=[
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",  
];
function nextslide()
{
  var i=0;
  if(i==4)
    {i=0;};
document.getElementById("aa")
.src=info[i]
i++;
}
