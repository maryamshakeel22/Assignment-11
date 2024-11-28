import ChildComponent from './ChildComponent';

function ParentComponent() {
    const data = [
        {
            name:"Maryam Shakeel",
            fvtdish:"Macroni",
            fvtcolor:"Black and White"
        },
        {
            name:"Mehak Fatima",
            fvtdish:"Biryani",
            fvtcolor:"Pink"
        },
        {
            name:"Amna",
            fvtdish:"Spaghetti",
            fvtcolor:"Black"
        },
        {
            name:"Hina",
            fvtdish:"Pizza",
            fvtcolor:"Yellow"
        }
]
  return (
    <div className='justify-center text-center items-center py-10'>
    <h1 className='text-3xl pb-10 animate-pulse'>Parent Component</h1>
    <div className="grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
    {data.map((person,index)=>(
        <ChildComponent
        key={index}
        name={person.name}
        fvtdish={person.fvtdish}
        fvtcolor={person.fvtcolor}
        />
    ))}  
</div>
</div>
);
}

export default ParentComponent;