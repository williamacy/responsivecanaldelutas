import React, { useState } from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './modalities.css'

function Modalities() {
  const [tabIndex, setTabIndex] = useState(0)

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10))
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <Box className='box'>
      <input
        type='range'
        min='0'
        max='5'
        value={tabIndex}
        onChange={handleSliderChange}
      />
        <h1 className="modalidadesoferecidas">
            <p> 
               MODALIDADES /  DIAS E HORARIOS
            </p>
        </h1>
      <Tabs index={tabIndex} onChange={handleTabsChange} className='tabs'>
        <TabList className='tab-list'>
          <Tab className='tab'>Jiu Jítsu</Tab>
          <Tab className='tab'>Boxe</Tab>
          <Tab className='tab'>MMA</Tab>
          <Tab className='tab'>Muay Thay</Tab>
          <Tab className='tab'>Funcional Fight</Tab>
          <Tab className='tab'>Preparação Física</Tab>
        </TabList>
        <TabPanels>
            {/* jiujitsu */}
        <TabPanel className='tab-panel'>
                    <table>
                        <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Horário</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEGUNDA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00 (VOINHO)</li>
                                <li>11h00 às 12h00 (VOINHO)</li>
                                <li>16h00 às 17h00 (kids) (VOINHO)</li>
                                <li>18h00 às 19h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>11h00 às 12h00 (VOINHO)</li>
                                {/* <li>07h00 às 08h00</li> */}
                                <li>18h00 às 19h00 (NoGi)(VOINHO)</li>
                                {/* <li>19h00 às 20h00</li> */}
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>QUARTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00 (VOINHO)</li>
                                <li>11h00 às 12h00 (VOINHO)</li>
                                <li>16h00 às 17h00 (kids) (VOINHO)</li>
                                <li>18h00 às 19h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>11h00 às 12h00 (VOINHO)</li>
                                {/* <li>07h00 às 08h00</li> */}
                                <li>18h00 às 19h00 (NoGi) (VOINHO)</li>
                                {/* <li>19h00 às 20h00</li> */}
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEXTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00 (VOINHO)</li>
                                <li>11h00 às 12h00 (VOINHO)</li>
                                <li>16h00 às 17h00 (kids) (VOINHO)</li>
                                <li>18h00 às 19h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                {/* <li>06h00 às 07h00</li> */}
                                <li>11h00 às 12h00 (VOINHO)</li>
                                {/* <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li> */}
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                    </table>
                    </TabPanel>
            {/* boxe        */}
        <TabPanel className='tab-panel'>
                    <table>
                        <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Horário</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEGUNDA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h00 às 08h00 (OGROO)</li>
                                {/* <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li> */}
                                <li>20h00 às 21h00 (ÍCARO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h00 às 08h00 (ÍCARO)</li>
                                <li>10h00 às 11h00 (OGROO)</li>
                                <li>16h00 às 17h00 (OGROO)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>QUARTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>10h00 às 11h00 (OGROO)</li>
                                {/* <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li> */}
                                <li>20h00 às 21h00 (ÍCARO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h00 às 08h00 (ÍCARO)</li>
                                <li>10h00 às 11h00 (OGROO)</li>
                                <li>16h00 às 17h00 (OGROO)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        {/* <tr>
                            <td>SEXTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h00 às 08h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>20h00 às 21h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        {/* <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                    </table>
                    </TabPanel>
            {/* mma     */}
        <TabPanel className='tab-panel'>
                    <table>
                        <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Horário</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEGUNDA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (combate)(GAZZO)</li>
                                <li>18h00 às 19h00 (fitness)(GAZZO)</li>
                            </ul>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>QUARTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (fitness)(GAZZO)</li>
                                <li>18h00 às 19h00 (combate)(GAZZO)</li>
                            </ul>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEXTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (fitness)(GAZZO)</li>
                                <li>18h00 às 19h00 (combate)(GAZZO)</li>
                                <li>19h00 às 20h00 (fitness)(GAZZO)</li>
                            </ul>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                    </table>
                    </TabPanel>
            {/* muaythay */}
        <TabPanel className='tab-panel'>
                    <table>
                        <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Horário</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEGUNDA-FEIRA</td>
                            <td>
                            <ul>
                                <li>19h00 às 20h00 (KAIKY)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (LEO IURY)</li>
                                <li>18h00 às 19h00 (LEO IURY)</li>
                                <li>19h00 às 20h00 (LEO IURY)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>QUARTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>19h00 às 20h00 (KAIKY)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (LEO IURY)</li>
                                <li>18h00 às 19h00 (LEO IURY)</li>
                                <li>19h00 às 20h00 (LEO IURY)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        {/* <tr>
                            <td>SEXTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        {/* <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                    </table>
                    </TabPanel>
            {/* funcional */}
        <TabPanel className='tab-panel'>
                    <table>
                        <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Horário</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEGUNDA-FEIRA</td>
                            <td>
                            <ul>
                                <li>10h00 às 11h00 (VOINHO)</li>
                                {/* <li>20h00 às 21h00</li> */}
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>20h00 às 21h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>QUARTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h00 às 08h00 (VOINHO)</li>
                                {/* <li>20h00 às 21h00</li> */}
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>20h00 às 21h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEXTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h00 às 08h00 (VOINHO)</li>
                                <li>10h00 às 11h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>10h00 às 11h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                    </table>
                    </TabPanel>
            {/* preparacao */}
        <TabPanel className='tab-panel'>
                    <table>
                        <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Horário</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEGUNDA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (VOINHO)</li>
                                <li>19h00 às 20h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h30 às 08h30 (VOINHO)</li>
                                <li>17h00 às 18h00 (VOINHO)</li>
                                <li>19h00 às 20h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>QUARTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (VOINHO)</li>
                                <li>19h00 às 20h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>07h30 às 08h30 (VOINHO)</li>
                                <li>17h00 às 18h00 (VOINHO)</li>
                                <li>19h00 às 20h00 </li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SEXTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>17h00 às 18h00 (VOINHO)</li>
                                <li>19h00 às 20h00 (VOINHO)</li>
                            </ul>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr> */}
                        </tbody>
                        <thead>
                        <tr>
                            {/* <th>Dia</th>
                            <th>Horário</th> */}
                        </tr>
                        </thead>
                    </table>
                    </TabPanel>

        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Modalities;
