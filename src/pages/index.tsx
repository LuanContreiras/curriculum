import {
  LinkedinLogo,
  GithubLogo,
  AppWindow,
  WhatsappLogo
} from 'phosphor-react'

import { Header } from '../components/Header'
import { JobCard } from '../components/JobCard'

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />

      <section className="px-6 py-8 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-4 lg:justify-items-center">
        <main className="lg:w-[90%]">
          <p className="text-purple-400 text-sm leading-relaxed">
            Formado em Análise e Desenvolvimento de Sistemas na Estácio.
            Entusiasta em tecnologia e apaixonado pela área de desenvolvimento
            Web e Mobile. {<br />}
            {<br />}
            Busco me aliar à empresas antenadas ao mercado de desenvolvimento
            tecnológico onde meu conhecimento em programação com (foco em
            desenvolvimento Front-end) possa ser testado e aperfeiçoado, criando
            uma relação mútua de crescimento profissional. {<br />}
            {<br />}
            Acredito que a proatividade e um bom relacionamento com os colegas
            de trabalho são peças chave para enfrentar os novos desafios desse
            mundo volátil e incerto.{<br />}
          </p>

          <div className="mt-16">
            <h2 className="uppercase text-purple-400 font-bold text-xl lg:text-lg">
              Experiência Profissional
            </h2>

            <JobCard
              job="Desenvolvedor Front-End"
              company="Mentalout"
              description="Auxiliar de desenvolvimento web para plataforma VALUE da Constellation Asset Management. Trabalhei utilizando:
                Wordpress (Elementor), HTML, CSS e Javascript."
              mountIn="Set"
              yearIn={2021}
            />
            <JobCard
              job="Técnico de informática"
              company="JLR e Advogados"
              description="Montagem, acabamento e manutenção dos computadores, identificação e correção de problemas nos computadores, instalação e configuração de redes e softwares entre outras atividades."
              mountIn="Jun"
              yearIn={2018}
              mountOut="Out"
              yearOut={2019}
            />
            <JobCard
              job="Assistente administrativo"
              company="Boca do Rio auto peças"
              description="Responsável pelo recebimento e envio de correspondências e documentos, assim como a emissão de notas fiscais, elaboração de relatórios financeiros e atualização de arquivos e cadastros de informações."
              mountIn="Jun"
              yearIn={2016}
              mountOut="Dez"
              yearOut={2017}
            />
          </div>
        </main>

        <div className="mt-16 lg:mt-0 lg:w-[90%]">
          <h2 className="uppercase text-purple-400 font-bold text-xl lg:text-lg">
            Habilidades
          </h2>

          <div>
            <div className="text-center opacity-80 mt-2">
              <span>Tempo de experiência (em anos)</span>
            </div>

            <div className="flex justify-between font-bold text-center text-purple-400 mx-1">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>

            <ul className="font-bold text-gray-600">
              <li className="relative mt-2">
                <span>HTML</span>
                <div className="absolute h-2 w-full bg-gray-400 rounded-full overflow-hidden">
                  <span className="absolute h-2 w-5/6 bg-purple-400"></span>
                </div>
              </li>

              <li className="relative mt-4">
                <span>CSS</span>
                <div className="absolute h-2 w-full bg-gray-400 rounded-full overflow-hidden">
                  <span className="absolute h-2 w-5/6 bg-purple-400"></span>
                </div>
              </li>

              <li className="relative mt-4">
                <span>Javascript</span>
                <div className="absolute h-2 w-full bg-gray-400 rounded-full overflow-hidden">
                  <span className="absolute h-2 w-5/6 bg-purple-400"></span>
                </div>
              </li>

              <li className="relative mt-4">
                <span>React JS</span>
                <div className="absolute h-2 w-full bg-gray-400 rounded-full overflow-hidden">
                  <span className="absolute h-2 w-3/6 bg-purple-400"></span>
                </div>
              </li>

              <li className="relative mt-4">
                <span>Typescript</span>
                <div className="absolute h-2 w-full bg-gray-400 rounded-full overflow-hidden">
                  <span className="absolute h-2 w-3/6 bg-purple-400"></span>
                </div>
              </li>

              <li className="relative mt-4">
                <span>Git</span>
                <div className="absolute h-2 w-full bg-gray-400 rounded-full overflow-hidden">
                  <span className="absolute h-2 w-2/6 bg-purple-400"></span>
                </div>
              </li>

              <li className="relative mt-4">
                <span>Node.js</span>
                <div className="absolute h-2 w-full bg-gray-400 rounded-full overflow-hidden">
                  <span className="absolute h-2 w-1/6 bg-purple-400"></span>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="uppercase text-purple-400 font-bold text-xl mt-16 lg:mt-9 lg:text-lg">
            Formação acadêmica
          </h2>
          <ul className="mt-4 text-gray-600 lg:text-sm">
            <li className="flex flex-col ">
              <strong>Análise e Desenvolvimento de Sistemas</strong>
              <span className="text-sm">
                Curso Superior de Tecnologia, Universidade Estácio de Sá
                Salvador, BA - Conclusão em 2020.1
              </span>
            </li>
          </ul>

          <div className="lg:grid lg:grid-cols-2">
            <div>
              <h2 className="uppercase text-purple-400 font-bold text-xl lg:text-lg mt-16 lg:mt-9">
                Idioma(s)
              </h2>
              <ul className="mt-4 text-gray-600">
                <li className="flex flex-col">
                  <strong>Português</strong>
                  <span className="text-sm">Nativo</span>
                </li>

                <li className="flex flex-col mt-4">
                  <strong>Inglês</strong>
                  <span className="text-sm">Intermediário</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="uppercase text-purple-400 font-bold text-xl lg:text-lg mt-16 lg:mt-9">
                Contatos
              </h2>
              <ul className="mt-4 text-gray-600 grid grid-cols-2 gap-y-2 lg:gap-y-3 lg:grid-cols-1">
                <li>
                  <a
                    className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-300"
                    href="https://www.linkedin.com/in/luan-contreiras-9b9b67183/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinLogo size={28} />
                    <strong>Linkedin</strong>
                  </a>
                </li>

                <li>
                  <a
                    className="flex gap-1 items-center hover:text-orange-400 ease-in-out duration-300"
                    href="https://github.com/LuanContreiras"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubLogo size={28} />
                    <strong>Github</strong>
                  </a>
                </li>

                <li>
                  <a
                    className="flex gap-1 items-center hover:text-purple-400 ease-in-out duration-300"
                    href="https://luancontreiras.github.io/Portfolio---Luan-Contreiras/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AppWindow size={28} />
                    <strong>Portfolio</strong>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center gap-1 hover:text-green-600 ease-in-out duration-300"
                    href="https://wa.me/+5571992505190"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsappLogo size={28} />
                    <strong>Whatsapp</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="h-6 bg-gradient-to-l from-purple-500 to-purple-400"></footer>
    </div>
  )
}
