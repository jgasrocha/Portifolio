import FiveTech from '../../assets/five.png';
import InterageTEA from '../../assets/interageTea.png';
import LogoNova from '../../assets/logoNova.png';
import Portifolio from '../../assets/portifolioPessoal.png';
import FlordeMaio from '../../assets/flordemaio.png';
import Eduarda from '../../assets/eduarda.png';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.';

export const projects = [
    {
        title: 'InterageTEA',
        description: 'Jogo educativo focado em interações para estudantes com TEA.',
        fullDescription: `InterageTEA é um jogo educativo desenvolvido para auxiliar estudantes com Transtorno do Espectro Autista (TEA) a desenvolverem habilidades sociais e emocionais através de interações lúdicas. ${lorem}`, 
        image: InterageTEA,
        link: 'https://play.google.com/store/apps/details?id=com.IFBaiano.InterageTEA',
        technologies: ['Unity', 'C#', 'Aseprite']
    },
    {
        title: 'Portifólio da FiveTech',
        description: 'Portfólio de projetos desenvolvidos pela FiveTech.',
        fullDescription: `Portfólio de projetos desenvolvidos pela FiveTech, incluindo sistemas de gestão e aplicativos. ${lorem}`,
        image: FiveTech,
        link: 'https://fivetech.netlify.app/',
        technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
        title: 'Sistema de Gestão Educacional - SIGEA',
        description: 'Otimização de rotina escolar para maior eficiência.',
        fullDescription: `Sistema de agendas para otimizar a organização e rotina escolar, visando maior eficiência e praticidade para estudantes e educadores. ${lorem}`,
        image: LogoNova,
        link: 'https://horario.formigueirotecnologico.com.br/',
        technologies: ['Laravel', 'PHP', 'Vue.js', 'MySQL']
    },
    {
        title: 'Portfólio Pessoal',
        description: 'Meu portfólio pessoal desenvolvido em Vue.js.',
        fullDescription: `Este portfólio pessoal foi desenvolvido utilizando Vue.js, destacando minhas habilidades e projetos na área de desenvolvimento web. ${lorem}`,
        image: Portifolio,
        link: '#home-section',
        technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
        title: 'Site da Loja Flor de Maio',
        description: 'Site para loja de bolsas com maior alcance.',
        fullDescription: `Site da loja Flor de Maio, visando um maior alcance para atrair clientes. ${lorem}`,
        image: FlordeMaio,
        link: 'https://flordemaio.netlify.app/',
        technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        title: 'Eduarda Consultora',
        description: 'Site de consultoria de consórcios.',
        fullDescription: `Site de consultoria de consórcios, oferecendo informações e serviços personalizados para clientes interessados em adquirir consórcios. ${lorem}`,
        image: Eduarda,
        link: 'https://eduarda-consorcio.netlify.app/',
        technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3']
    }
];