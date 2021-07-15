import React from 'react'
import Maingrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

function ProfileSideBar(propriedades) {
  return (

    <Box as="aside">

      <img src={`http://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>

        <a className="boxLink" href={`http://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>


      </p>


      <hr />

      <AlurakutProfileSidebarMenuDefault />

    </Box>

  )

}


export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '1',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const usuarioAleatorio = 'johnyguido';
  //const comunidades = [`Alurakut`];
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

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriarComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              const comunidade = {
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);




            }}>
              <div>
                <input

                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  arial-label="Qual vai ser o nome da sua comunidade?"
                  type="text"

                />


              </div>

              <div>
                <input

                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  arial-label="Coloque uma URL para usarmos de capa"

                />


              </div>

              <button>
                Criar comunidade
              </button>

            </form>

          </Box>

        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >
          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle" >
              Comunidades ({comunidades.length})

            </h2>

            <ul>
              {comunidades.map((itemAtual) => {

                return (

                  <li key={itemAtual.id}>

                    <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>


                  </li>


                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle" >
              Pessoas da comunidade ({pessoasFavoritas.length})

            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {

                return (

                  <li key={itemAtual}>

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
