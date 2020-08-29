import styled from "styled-components"

const PackGridStyle = styled.div`
	display: grid;
	grid-template-columns : repeat(3, 22rem);
	gap : 2rem 2rem;

	width	: 95%;
	margin	: 0 auto;
	
	@media (max-width: 1200px) {
        grid-template-columns : repeat(2, 22rem);
	}
	@media (max-width: 768px) {
        grid-template-columns : repeat(1, 1fr);
    }
	
`

export default PackGridStyle;