import AdBlock from "@/components/AdBlock";
import ArticleSection from "@/components/landing-page/ArticleSection";
import Divider from "@/components/landing-page/divider";
import PatternDivider from "@/components/landing-page/PatternDivider";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { RetroGrid } from "@/components/ui/retro-grid";
import Link from "next/link";

function LandingPage() {
  return (
    <main className="w-full">
      <div className="h-80 sm:h-[calc(100dvh-56.8px)] w-full relative ">
        <RetroGrid />
        <h1 className="bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent text-7xl font-bold absolute top-1/5 sm:top-1/3 text-center w-full">
          Landing Page
        </h1>
        <Divider />
      </div>
      <div className="w-full bg-[#1c1a2e]">
        <section className="container mx-auto pt-10 pb-6">
          <h1 className="text-[#f5f5f5] text-2xl w-full text-center font-medium">
            Tecnologia descomplicada para proteger o que é importante para você
          </h1>
          <h2 className="w-full text-center text-muted-foreground text-lg my-8 font-normal">
            Tutoriais práticos, guias passo a passo e dicas confiáveis para
            cuidar melhor do seu celular e dos seus dados.
          </h2>
          <h3 className="w-full text-center text-muted-foreground text-md font-light">
            Veja nossos principais artigos
          </h3>
        </section>
      </div>
      <PatternDivider />
      <div className="w-full bg-[#1c1a2e] py-8 flex justify-center items-center">
        <section className="max-w-full overflow-x-auto">
          <AdBlock />
        </section>
      </div>
      <PatternDivider />
      <ArticleSection
        title="Como fazer backup dos arquivos do seu celular"
        description="Fotos, conversas, documentos e arquivos pessoais fazem parte da nossa rotina — até o dia em que algo dá errado e tudo pode ser perdido em segundos. O artigo aborda exatamente esse cenário e mostra por que o backup na nuvem deixou de ser um detalhe técnico para se tornar uma necessidade real no dia a dia digital. De forma simples e acessível, o conteúdo explica o conceito de backup, destaca os principais benefícios dessa prática e mostra como ela pode evitar dores de cabeça causadas por perdas, falhas ou acidentes com o celular. Sem entrar em termos complicados, o artigo desperta a consciência sobre segurança digital, acesso aos arquivos de qualquer lugar e tranquilidade no futuro. Além disso, apresenta uma visão geral das opções disponíveis atualmente e como cada pessoa pode escolher a solução que melhor se encaixa na sua rotina. Se você já perdeu algum arquivo importante — ou quer evitar que isso aconteça — este artigo é o próximo passo para proteger o que realmente importa."
        ImageUrl="/images/Backup.png"
        ArticleUrl="/backup"
      />
      <PatternDivider />
      <ArticleSection
        title="Saiba como recuperar fotos apagadas do celular"
        description="Apagar uma foto importante por engano é mais comum do que parece — e quase sempre vem acompanhado de desespero. Este artigo parte exatamente dessa situação para mostrar que, na maioria dos casos, nem tudo está perdido. De forma clara e acessível, o conteúdo apresenta as principais possibilidades de recuperação de fotos apagadas, tanto em celulares Android quanto em iPhone, explicando por que ainda existe esperança mesmo depois de um erro, falha do sistema ou bug inesperado. Sem entrar em termos técnicos complicados, o texto conduz o leitor por caminhos que muitas pessoas nem imaginam existir, revelando onde essas imagens podem estar escondidas e quais alternativas valem a pena tentar antes de desistir. Além disso, o artigo ajuda a entender como backups e sincronizações funcionam na prática e por que agir rápido pode fazer toda a diferença. Se você já perdeu fotos valiosas ou quer estar preparado para esse tipo de imprevisto, este guia desperta curiosidade, alívio e vontade imediata de continuar lendo para tentar recuperar o que parecia perdido para sempre."
        ImageUrl="/images/GooglePhotos.png"
        ArticleUrl="/fotos"
      />
      <PatternDivider />
      <div className="w-full bg-[#1c1a2e]">
        <section className="container mx-auto py-8 px-6 blog-content">
          <h2 className="text-[#f5f5f5]">
            Por que confiar no nosso blog de tecnologia?
          </h2>
          <p className="text-[#f5f5f5]">
            A tecnologia faz parte da nossa rotina todos os dias. No celular
            estão guardadas fotos de momentos importantes, documentos de
            trabalho, contatos, conversas e informações que não podem ser
            perdidas. Ainda assim, muita gente só percebe a importância de
            cuidar desses dados quando algo dá errado — uma foto apagada por
            engano, um celular quebrado ou uma troca de aparelho sem backup.
          </p>
          <p className="text-[#f5f5f5]">
            Nosso blog de tecnologia foi criado exatamente para evitar esse tipo
            de problema.
          </p>
          <p className="text-[#f5f5f5]">
            Aqui, você encontra conteúdos educativos, práticos e confiáveis,
            pensados para quem quer usar a tecnologia com mais segurança, sem
            complicação e sem precisar ser um especialista. Cada artigo é
            desenvolvido com foco em resolver problemas reais, usando uma
            linguagem clara, exemplos simples e tutoriais passo a passo que
            funcionam tanto para usuários iniciantes quanto para quem já tem
            mais experiência.
          </p>
          <p className="text-[#f5f5f5]">
            Trabalhamos com informações atualizadas, baseadas nas principais
            soluções disponíveis para celulares Android e iOS, sempre explicando
            o que fazer, por que fazer e como fazer da forma correta. Nosso
            compromisso é ajudar você a:
          </p>
          <ul className="text-[#f5f5f5]">
            <li>Proteger seus arquivos antes que eles sejam perdidos</li>
            <li>Entender como funcionam backups, nuvem e armazenamento</li>
            <li>Recuperar fotos e dados apagados sempre que for possível</li>
            <li>
              Tomar decisões mais seguras ao usar aplicativos e recursos do
              celular
            </li>
          </ul>
          <p className="text-[#f5f5f5]">
            Mais do que um blog de tecnologia, queremos ser uma fonte de apoio e
            aprendizado contínuo, onde você pode voltar sempre que surgir uma
            dúvida ou um imprevisto. Acreditamos que informação acessível é a
            melhor forma de evitar prejuízos digitais e trazer mais
            tranquilidade para o dia a dia.
          </p>
          <h3 className="text-[#f5f5f5]">Comece agora</h3>
          <p className="text-[#f5f5f5] mb-12">
            Explore nossos artigos, aprenda a proteger seus dados e tenha mais
            controle sobre sua vida digital.
          </p>
          <Link href="/">
            <InteractiveHoverButton>
              Explorar todos os artigos do blog
            </InteractiveHoverButton>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default LandingPage;
