enum LangOptions { ptBr, eng }

class TextObject {
  final String text;
  final LangOptions lang;
  const TextObject({required this.text, required this.lang});
}

class InterText {
  final TextObject ptBr;
  final TextObject? eng;
  const InterText({required this.ptBr, this.eng});
}

const Map<String, InterText> textHolder = {
  "Introdução": InterText(ptBr: TextObject(text: """ 
  Esse é o LABlog, um projeto pessoal que herda a arquitetura de um blog.

  Aqui Discuto sobre projetos que eu participo, sobre meus hobbies, tecnologias que
  eu estudo e uso, basicamente um blog pessoal onde eu posto o que eu achar interessante

  Fique livre para explorar!

  A aba de posts contém todos os posts que eu escrevi inicialmente para essa plataforma,
  alguns posts que eu quero compartilhar são repostados automaticamente em outras redes
  que possuem tal função.

  Na aba de Currículo Geral é onde você vai achar minhas capacidades, experiências técnicas,
  meus cursos e meu estado atual de comprometimento com algum projeto. 
  São dois Currículos que estarão disponíveis para leitura, para pessoas "Não Técnicas" 
  com mais generalismo, formalidades e a politicagem comum presente em qualquer currículo
  e outra para pessoas "Técnicas" que vai incluir mais detalhes técnicos e práticos da
  área da computação e claro, informalidades que vão te entregar uma fração da pessoa
  que sou. O motivo disso é um princípio profissional que tenho: O trabalho sustenta quem
  somos, é fundamental conhecer com quem trabalha. A escolha é livre! mas escolher qual
  você mesmo imagina se encaixar vai te trazer a experiência que eu planejei para você...
  Se tiver tempo e, logicamente, for uma pessoa descente que vai compreender minha proposta,
  leia os dois!
  Se você for um recrutador que veio através de outro currículo que eu enviei por e-mail, 
  tenha em mente que o currículo enviado foi um currículo contextual pensado para a vaga
  proposta e provavelmente vai ser diferente do currículo presente neste site.

  A aba de projetos é onde vou integrar meu GitHub, projetos que estão em desenvolvimento e
  uma lista de projetos futuros.

  Meu contato estará sempre no final da página, fique livre pra me contatar ou reportar 
  algum bug!
  """, lang: LangOptions.ptBr), eng: TextObject(text: """
This is LABlog, a personal project that inherits the architecture of a blog.

  Here i discuss projects that i work in, hobbies, technologies that
  i study, basically a personal blog where i'll post whatever I find interesting.

  Feel free to figure out!

  The posts tab contains all the writings i initially wrote for this platform,
  some i'll on other networks that have this compatibility.

  The General Resume tab is where you will find my skills, experiences, courses and mine current state of work.
  There are two CVs that will be available for reading, for "Non-Technical" people
  with more generalism, formalities and the common politics present in any curriculum
  and another for "Technical" people that will include more technical and practical details of
  ​​computing area and of course, informalities that will give you a fraction of the person
  that I am. The reason for this is a professional principle that i follow: Work sustains those who
  we are, it is essential to know who you work with. The choice is free! but choose which
  If you yourself imagine fitting in, it will bring you the experience I planned for you...
  If you have time and, logically, you are a decent person who will understand my proposal,
  read them both!
  If you are a recruiter who came across another resume I emailed,
  Keep in mind that the CV sent was a contextual CV designed for the position
  proposal and will probably be different from the CV on this website.

  The projects tab is where I will integrate my GitHub, projects that are in development and
  a list of future projects.

  My contact details will always be at the bottom of the page, feel free to contact me or report
  some bug!

""", lang: LangOptions.eng)),
  "Nome dos Butão": InterText(ptBr: TextObject(text: """
Posts/Currículo Geral/Projetos
""", lang: LangOptions.ptBr), eng: TextObject(text: """
Posts/General Resume/Projects
""", lang: LangOptions.eng)),
  "Texto do Beta": InterText(ptBr: TextObject(text: """
  Este blog está em desenvolvimento, dito isso, algumas funcionalidades não estão presentes
   no atual momento. Venha mais tarde e fique de olho!

  Alguns textos podem ter erros, os textos em inglês são revisados e escritos por mim
  ... algumas outras linguas podem vir a ser presente também como treino meu.
""", lang: LangOptions.ptBr), eng: TextObject(text: """
  This blog is in development phase, this means that some funcionalities won't be
  available, come later... keep tuned in!

  Some texts can have some details that i'll fix with more learning off gringo languages,
  like english! Be patient.
""", lang: LangOptions.eng)),
  "Contato": InterText(ptBr: TextObject(text: """
  devjoaoleal1006@gmail.com

""", lang: LangOptions.ptBr), eng: TextObject(text: """
  devjoaoleal1006@gmail.com
""", lang: LangOptions.eng))
};
