import "./iconssection.css";
// Importamos íconos SVG y estilos necesarios
import { 
  BracketsCheck, TerminalSquare, Code01, Container, Codepen, 
  CpuChip01, Data, Database03, Server04, Dataflow01, 
  GitBranch01, Package, Code02, BracketsEllipses, CpuChip02, 
  GitPullRequest, PuzzlePiece01, QrCode01, Server02, TerminalCircle, 
  Variable, Server03, PuzzlePiece02, GitCommit, Brackets, GitBranch02 
} from "../../components/Icons";


// Componente que renderiza una grilla de íconos animados con estilos personalizados
export function IconsSection() {

  // Clases de animación que se aplican cíclicamente a los íconos para dar efecto flotante
  const animationClasses = [
    'float-animation-1',
    'float-animation-2',
    'float-animation-3',
    'float-animation-4',
  ];
  
// Clases de sombras específicas para cada ícono (asociadas por índice)
  const shadowClasses = [
    'icon-shadow-pink',       // BracketsCheck
    'icon-shadow-plum',       // TerminalSquare
    'icon-shadow-brown',      // Code01
    'icon-shadow-yellow',     // Container
    'icon-shadow-lightgreen', // Codepen
    'icon-shadow-red',        // CpuChip01
    'icon-shadow-teal',       // Data
    'icon-shadow-darkgreen',  // Database03
    'icon-shadow-yellow',     // Server04
    'icon-shadow-peach',      // Dataflow01
    'icon-shadow-lightpink',  // GitBranch01
    'icon-shadow-lavender',   // Package
    'icon-shadow-lightblue',  // Code02
    'icon-shadow-green',      // BracketsEllipses
    'icon-shadow-lavender',   // CpuChip02
    'icon-shadow-skyblue',    // GitPullRequest
    'icon-shadow-lime',       // PuzzlePiece01
    'icon-shadow-grayblue',   // QrCode01
    'icon-shadow-olive',      // Server02
    'icon-shadow-salmon',     // TerminalCircle
    'icon-shadow-lightpink',  // Variable
    'icon-shadow-grayblue',   // Server03
    'icon-shadow-salmon',     // PuzzlePiece02
    'icon-shadow-cyan',       // GitCommit
    'icon-shadow-purple',     // Brackets
    'icon-shadow-teal',       // GitBranch02
  ];

  // Lista de íconos importados, mantenida en el mismo orden que shadowClasses
  const icons = [
    BracketsCheck, TerminalSquare, Code01, Container, Codepen, 
    CpuChip01, Data, Database03, Server04, Dataflow01, 
    GitBranch01, Package, Code02, BracketsEllipses, CpuChip02, 
    GitPullRequest, PuzzlePiece01, QrCode01, Server02, TerminalCircle, 
    Variable, Server03, PuzzlePiece02, GitCommit, Brackets, GitBranch02 
  ];

  return(
    <section className="iteractive-icons-container">
      {icons.map((Icon, index) => (
        <div 
          key={`icon-${Icon.name}`} 
          className={`icon-wrapper ${animationClasses[index % animationClasses.length]} ${shadowClasses[index]}`}
        >
          <Icon/>
        </div>
      ))}
    </section>
  )
}