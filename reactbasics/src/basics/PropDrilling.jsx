import ComponentRendering from "./ConponentRendering"

const PropDrilling = (props)=>{
    return (
        <>
        <ComponentRendering/>
   <table>
    <tr>
      <th>Name </th>
      <th>Age </th>
      <th>Class </th>
    </tr>
    <tr>
      <td>Raza</td>
      <td>21</td>
      <td>{props.course}</td>
    </tr>
    <tr>
      <td>Abhishek</td>
      <td>20</td>
      <td>{props.course}</td>
    </tr>
    <tr>
      <td>Zaid</td>
      <td>19</td>
      <td>{props.course}</td>
    </tr>
   </table>
   </>
    )
}

export default PropDrilling;