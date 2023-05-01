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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TERÇA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>QUINTA-FEIRA</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>SÁBADO</td>
                            <td>
                            <ul>
                                <li>06h00 às 07h00</li>
                                <li>07h00 às 08h00</li>
                                <li>18h00 às 19h00</li>
                                <li>19h00 às 20h00</li>
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

        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Modalities;
