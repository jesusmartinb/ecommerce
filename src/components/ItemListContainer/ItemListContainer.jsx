
const ItemListContainer = ({greeting}) => {

    const greetingStyles = {
        color: 'black',
        fontSize: '1.3rem',
        fontWeight: 'lighter',
    }

  return (
    <>
        <main>
            <div className="header-sup">
                <div className="bienvenida text-center my-5">
                    <div className="bienve">
                        <h1>HERBORISTERÍA NATURAL</h1>
                            <div className="usuario"> {/* llamada a usuario */}
                            <p style={greetingStyles}>{greeting} <span style={{fontStyle: 'italic', fontWeight: 'normal'}} id="nombre-usuario">Jesús Martín Blanco</span></p>
                        </div>
                        <span id="nombre-usuario" className="name"></span>
                    </div>
                    <br />
                </div>
            </div>
        </main>
    </>
  )
}

export default ItemListContainer
