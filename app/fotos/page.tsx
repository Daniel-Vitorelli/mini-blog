import AdBlock from "@/components/AdBlock";
import BlogTemplate from "@/components/BlogTemplate";
import { GooglePlay } from "@/components/MobileButtons";

function fotos() {
  return (
    <BlogTemplate id="fotos">
      <p>
        Você já se viu naquela situação desesperadora de apagar acidentalmente
        uma foto importante do seu celular?
      </p>
      <p>
        Ou talvez tenha enfrentado o pânico de perder um álbum da galeria de uma
        só vez por causa de um bug inesperado?
      </p>
      <p>
        Se sim, você não está sozinho. Com o avanço da tecnologia, nossos
        celulares se tornaram verdadeiros baús de recordações, e neles agora
        estão armazenados momentos especiais que desejamos preservar para
        sempre.
      </p>
      <AdBlock />
      <p>
        Neste artigo, vamos explorar diferentes métodos para recuperar fotos
        apagadas do seu Android ou iPhone. Desde explorar o armazenamento
        interno do seu sistema até utilizar aplicativos externos para a
        recuperação desse tipo de arquivo, você vai descobrir que há esperança
        mesmo nos momentos em que tudo — literalmente — parece perdido.
      </p>
      <h2>Como recuperar fotos apagadas do Android?</h2>
      <h3>Método 1: utilizando o backup do Google Fotos</h3>
      <p>
        Seu Google Fotos está ativado? Então, em primeiro lugar, é importante
        checar se as fotos apagadas ainda estão por lá. Basta ir até o app
        “Fotos” e conferir.
      </p>
      <h3>Método 2: utilizando o armazenamento interno do seu celular</h3>
      <ol>
        <li>
          <strong>Acesse o Gerenciador de arquivos do seu celular</strong>: O
          Gerenciador de arquivos é o local que permite acessar as pastas do seu
          celular. Procure por esse aplicativo nativo do seu aparelho ou, caso
          não exista, instale um aplicativo que cumpra essa função. O ZArchiver é um bom exemplo.
        </li>
        <div className="m-2">
          <GooglePlay url="https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver" />
        </div>
        <li>
          <strong>Habilite a função “Mostrar arquivos ocultos”</strong>: Vá até
          as “Configurações” do Gerenciador de arquivos do seu celular e
          habilite a função “Mostrar arquivos ocultos”. As fotos apagadas se
          tornam arquivos ocultos no sistema, e essa opção permite
          visualizá-las.
        </li>
        <li>
          <strong>Localize a pasta “.thumbnails”</strong>
          Agora, tente localizar a pasta .thumbnails no armazenamento interno do
          Gerenciador de arquivos, pois é lá que suas fotos apagadas estarão.
          Essa pasta pode estar em locais diferentes, como dentro da pasta
          “DCIM”, da subpasta “Camera” ou, ainda, da pasta “Pictures”.
        </li>
        <li>
          <strong>Recupere suas fotos</strong>: Ao encontrar a pasta
          .thumbnails, você verá todas as cópias das fotos que já estiveram ou
          ainda estão em seu celular. Para recuperar uma foto específica, uma
          boa opção é criar uma pasta dentro da pasta “DCIM” e renomeá-la para
          “Fotos recuperadas”. Assim, ao abrir a galeria do celular, você poderá
          encontrá-las com mais facilidade.
        </li>
      </ol>
      <h2>Como recuperar fotos apagadas do iPhone?</h2>
      <p>
        Por meio dos métodos apresentados, você viu que é possível recuperar
        suas fotos apagadas no Android de forma prática e segura, não é mesmo?
        Agora, caso você tenha um iPhone, é hora de aprender algumas outras
        maneiras.
      </p>
      <h3>Método 1: conferindo os arquivos apagados na lixeira</h3>
      <p>
        Antes de qualquer coisa, confira se as suas fotos apagadas estão na
        lixeira. Para isso, vá até o app “Fotos”, clique em “Álbuns” e, em
        seguida, clique em “Apagados”. Acesse a pasta com o seu ID Apple (Touch
        ID ou Face ID) e cheque se as fotos que você procura, na verdade, não
        estão lá.
      </p>
      <h3>Método 2: utilizando o backup do iCloud</h3>
      <p>
        Checou e, realmente, as fotos não estão em “Apagados”? Agora é a hora de
        checar o seu iCloud.
      </p>
      <p>
        Isso porque, como a sincronização do sistema não é em tempo real, mesmo
        que você tenha apagado uma foto da lixeira, por exemplo, as chances de
        reencontrá-la no seu backup são grandes.
      </p>
      <p>
        Caso tenha encontrado as fotos que procura por lá, basta acessar o site
        icloud.com com o seu ID Apple (Touch ID ou Face ID), selecionar a(s)
        foto(s) que deseja recuperar e fazer o download.
      </p>
      <h3>Método 3: utilizando outro dispositivo Apple</h3>
      <p>
        Mais uma vez você checou e, realmente, as fotos não estão no seu iCloud?
        A última alternativa, então, é buscar um outro dispositivo Apple que,
        por sorte, esteja com o seu ID Apple logado.
      </p>
      <p>
        Com esse aparelho em mãos, a primeira ação é colocá-lo em modo avião
        para que nenhuma sincronização com o iCloud seja feita. Em seguida,
        basta checar no app “Fotos” se as fotos que você procura ainda estão por
        lá.
      </p>
      <h3>Método 4: utilizando o armazenamento interno do seu celular</h3>
      <p>
        Caso suas fotos não estejam sincronizadas com o iCloud, você pode tentar
        recuperá-las utilizando o armazenamento interno do seu celular. Para
        isso, siga este passo a passo:
      </p>
      <ol>
        <li>Vá em “Ajustes”;</li>
        <li>Clique no seu banner com o ID Apple;</li>
        <li>
          Em seguida, clique em “iCloud” e, logo depois, em “Backup do iCloud”;
        </li>
        <li>
          Agora, faça as contas: na data em que o último backup foi feito, a(s)
          foto(s) que você precisa recuperar ainda estava(m) em algum álbum?
          Caso sim, você vai conseguir recuperá-la(s) com este método.
        </li>
      </ol>
      <h2>Nada deu certo até agora? Tente alguns apps externos</h2>
      <p>
        Você também pode baixar alguns aplicativos externos para a recuperação
        de fotos perdidas, tais como:
      </p>
      <ul>
        <li>MobiSaver;</li>
        <div className="m-2">
          <GooglePlay url="https://play.google.com/store/apps/details?id=com.easeus.mobisaver" />
        </div>
      </ul>
    </BlogTemplate>
  );
}

export default fotos;
