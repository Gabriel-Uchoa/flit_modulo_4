import Buttons from "../Molecules/Buttons"
import CitationItem from "../Molecules/CitationItem"
const ListSection = () => {
    return (
        <>
            <div>
                <CitationItem
                    citationText="Apenas continue nadando."
                    author="Dory"
                    movie="Procurando Nemo" />
                <Buttons />
            </div>
            <div>
                <CitationItem
                    citationText="Ser ruim em alguma coisa é o primeiro passo para se tornar bom em alguma coisa."
                    author="Jake"
                    movie="Hora de Aventura" />
                <Buttons />
            </div>
            <div>
                <CitationItem
                    citationText="Vale a pena se derreter por algumas pessoas."
                    author="Olaf"
                    movie="Frozen" />
                <Buttons />
            </div>
            <div>
                <CitationItem
                    citationText="Eu não posso voltar para ontem, porque eu era uma pessoa diferente."
                    author="Alice"
                    movie="Alice no País das Maravilhas" />
                <Buttons />
            </div>
            <div>
                <CitationItem
                    citationText="É preciso uma grande dose de coragem para enfrentar seus inimigos, mas muito mais para enfrentar os seus amigos."
                    author="Dumbledore"
                    movie="Harry Potter e a Pedra Filosofal" />
                <Buttons />
            </div>
        </>
    )
 
}

export default ListSection