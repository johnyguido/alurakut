import Maingrid from './src/components/MainGrid'
import Box from './src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from './src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations';

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

function ProfileSideBar(propriedades) {
  return (

    <Box >

      <img src={`http://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />

    </Box>

  )

}


export default function Home() {
  const usuarioAleatorio = 'johnyguido';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (

    <>

      <AlurakutMenu />

      <Maingrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>

          <ProfileSideBar githubUser={usuarioAleatorio} />

        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>

          <Box >
            <h1 className="Title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle" >
              Pessoas da comunidade ({pessoasFavoritas.length})

            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {

                return (

                  <li>

                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>


                  </li>


                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>

        </div>

      </Maingrid>
    </>
  )

}
