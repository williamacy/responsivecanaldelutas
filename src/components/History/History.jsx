import React from 'react';
import * as TTabss from '@radix-ui/react-tabs';
import './History.css';

const History = () => (
  <TTabss.Root className="TabsRoot" defaultValue="tab1">
    <TTabss.List className="TabsList" aria-label="História do Canal De Lutas">
      <TTabss.Trigger className="TabsTrigger" value="tab1">
        Um pouquinho
      </TTabss.Trigger>
      <TTabss.Trigger className="TabsTrigger" value="tab2">
        sobre a gente
      </TTabss.Trigger>
    </TTabss.List>
    <TTabss.Content className="TabsContent" value="tab1">
      <p className="Text">

      Meu nome é Marcos e sou professor de Jiu-Jitsu. Desde jovem, eu sempre fui apaixonado pelas artes marciais e comecei a treinar Jiu-Jitsu aos 16 anos. O que começou como um hobby rapidamente se tornou uma paixão e uma carreira para mim. Eu competi em campeonatos de Jiu-Jitsu e MMA profissional, mas sempre soube que queria ensinar a arte para outras pessoas.


      </p>
    </TTabss.Content>
    <TTabss.Content className="TabsContent" value="tab2">
      <p className="Text">

      Abrir minha academia foi um desafio, mas também foi uma das melhores decisões que já tomei. Eu tenho a oportunidade de compartilhar minha paixão pelo Jiu-Jitsu com outros todos os dias, e ver meus alunos crescerem e alcançarem seus objetivos é extremamente gratificante. Não há nada melhor do que ver um aluno dominar uma nova técnica ou ganhar uma luta.



      </p>
    </TTabss.Content>
  </TTabss.Root>
);

export default History;
