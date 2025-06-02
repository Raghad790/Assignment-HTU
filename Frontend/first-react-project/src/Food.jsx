function Food() {
  const food = [
    { id: 1, name: "Orange",type:"fruits" },
    { id: 2, name: "Banana", type:"fruits"},
    { id: 3, name: "Apple" ,type:"fruits"},
  ];
  const vegatables=[
    {id:4,name:"Potatoes"},{id:5,name:"Corns"}
  ]
  food.sort((a,b)=>a.name.localeCompare(b.b));
  const foodList = food.map((p) => <li key={p.id}>{p.name}</li>);
const vegatablesList=vegatables.map((p)=><li key={p.id}>{p.name}</li>)

  return (<>
  <ul>{foodList}</ul>;
  <ul>{vegatablesList}</ul>
  </>)
}

export default Food;
