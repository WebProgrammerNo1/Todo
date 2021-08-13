import{ListGroupItem} from "reactstrap"
import styled from "styled-components"

const ListGroupItemWrapper = styled (ListGroupItem) `
 .dropdown-toggle::after{
     display:none;
 }
 input{
     border:none
 }
`

export default ListGroupItemWrapper
