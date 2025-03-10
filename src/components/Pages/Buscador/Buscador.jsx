

function Buscador({buscar}) {
  return (
    <>
      <input 
        type="text" 
        placeholder="Buscar..." 
        onChange={e => buscar(e.target.value)}
      />
    </>
  )
}

export default Buscador