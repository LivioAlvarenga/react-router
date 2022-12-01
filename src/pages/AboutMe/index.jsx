import bannerSobre from "@/assets/images/bannerSobre.webp";
import minhaFoto from "@/assets/images/sobre_mim_foto.webp";
import minhaFotoHover from "@/assets/images/sobre_mim_foto_hover.webp";
import PostModel from "@/components/PostModel";

export default function AboutMe() {
  return (
    <PostModel
      bannerTitle={bannerSobre}
      title="Sobre mim"
      position="object-[0px_-20px] md:object-[0px_-40px] lg:object-[0px_-265px]"
    >
      <h3 className="mt-10 mb-8 font-playfair text-3xl font-bold md:text-4xl lg:text-5xl">
        Olá, eu sou Livio Alvarenga,
      </h3>
      <div className="group relative mb-8 shadow-2xl">
        <img
          className="absolute right-0  w-full rounded opacity-0 duration-1000 ease-in-out md:m-[0_auto_2rem] md:w-[70vw] lg:ml-6 lg:w-[35vw] lg:group-hover:opacity-100"
          src={minhaFotoHover}
          alt="foto Livio Alvarenga com uma camiseta de programação"
        />
        <img
          className="w-full rounded md:m-[0_auto_2rem] md:w-[70vw] lg:float-right lg:ml-6 lg:w-[35vw]"
          src={minhaFoto}
          alt="foto Livio Alvarenga com uma camiseta de programação"
        />
      </div>

      <p className="mb-5 md:text-xl lg:text-2xl ">
        engenheiro de Produção aficcionado por tecnologia, programação, processos e
        planejamento, uni todas essas paixões em uma só profissão.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Prazer, meu nome é Livio Alvarenga. Sou engenheiro e desenvolvedor, crio soluções
        personalizadas para empresas com uma boa dose de tecnologia.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Para que você entenda como cheguei até aqui, gostaria de te contar uma breve
        história.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Antes de me tornar desenvolvedor, ressalto que sou técnico em eletrônica,
        engenheiro de produção, pós graduado em processos industriais, logística, MBA em
        Gerenciamento de Projetos e MBA em Data Science.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Fiz minha carreira de operário de chão de fábrica até a gerência de uma
        multinacional do ramo de energia.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Passei por toda a cadeia estratégica e por todo planejamento físico, produtivo e
        de suprimentos. Projetei linhas de produção, almoxarifados, desenvolvi
        fornecedores, gerencie suprimentos. Implementei vários, ah sim, vários MRPs (isso
        foi cansativo, mas desafiador). Criei toda estrutura de planejamento de produção,
        materiais e suprimentos de uma empresa.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Sim, fiz tudo isso em longos 20 anos, com tropeços, acertos e muito aprendizado.
        Ao longo de todo esse tempo percebi algo fundamental: não é possível dar conta de
        administrar todo volume de informação sem tecnologia, motivo pelo qual me
        apaixonei pela programação e aí está o meu grande diferencial.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Sou um programador com visão 360 de negócios, pois foram 20 anos aprendendo e
        adquirindo experiências. Quando estou desenvolvendo aplicativos e soluções, toda
        essa experiência é passada para o código de forma natural. Assim, consegui unir
        minhas paixões: tecnologia e planejamento.
      </p>

      <p className="mb-5 md:text-xl lg:text-2xl">
        Estudei muito no passado, estou estudando agora e vou estudar até o fim dos meus
        dias, pois a curiosidade de sempre aprender algo novo é a minha motivação.
        Tecnologia é isso, a cada dia se renova. Vou absorvendo novos conceitos mediante a
        necessidade dos meus clientes e dos meus projetos pessoais, sempre com a admiração
        de um entusiasta pela ciência.
      </p>

      <p className="mb-10 md:text-xl lg:mb-24 lg:text-2xl">
        Sou considerado um profissional analítico, empreendedor, inovador e determinado.
        Sou o profissional polivalente que fala tanto a linguagem do negócio como a
        linguagem da tecnologia. Sou um líder que compartilha conhecimento e busca
        fornecer meios para que minha equipe evolua e cresça profissionalmente.
      </p>
    </PostModel>
  );
}
