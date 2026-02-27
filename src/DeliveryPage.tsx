import { motion } from 'motion/react';
import { 
  BookOpen, 
  CheckSquare, 
  Calendar, 
  DollarSign, 
  Scissors, 
  Zap, 
  ExternalLink,
  Download
} from 'lucide-react';

const modules = [
  {
    title: "Como Lidar com Duas Texturas",
    description: "Aprenda a finalizar e cuidar do cabelo durante a fase mais difícil.",
    icon: <Scissors size={32} />,
    link: "https://como-lidar-com-duas-text-z8jc204.gamma.site/",
    color: "bg-brand-100 text-brand-600",
    buttonColor: "bg-brand-600 hover:bg-brand-700"
  },
  {
    title: "Checklist da Transição",
    description: "O passo a passo semanal para você não se perder no processo.",
    icon: <CheckSquare size={32} />,
    link: "https://o-plano-completo-para-sa-6rosyoe.gamma.site/",
    color: "bg-blue-100 text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    title: "Cronograma Capilar Estratégico",
    description: "Rotina de cuidados focada em fortalecimento e crescimento.",
    icon: <Calendar size={32} />,
    link: "https://cronograma-capilar-estra-8e4us9q.gamma.site/",
    color: "bg-purple-100 text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700"
  },
  {
    title: "Pare de Gastar Dinheiro Errado",
    description: "Lista de produtos e dicas para economizar de verdade.",
    icon: <DollarSign size={32} />,
    link: "https://pare-de-gastar-dinheiro--rw4zvae.gamma.site/",
    color: "bg-green-100 text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700"
  },
  {
    title: "Guia de Penteados",
    description: "Soluções práticas para disfarçar a raiz e elevar a autoestima.",
    icon: <BookOpen size={32} />,
    link: "https://guia-completo-de-pentead-xusrujw.gamma.site/",
    color: "bg-pink-100 text-pink-600",
    buttonColor: "bg-pink-600 hover:bg-pink-700"
  },
  {
    title: "Segredo do Crescimento Acelerado",
    description: "Técnicas e receitas para seu cabelo crescer forte e rápido.",
    icon: <Zap size={32} />,
    link: "https://o-segredo-do-crescimento-hobv03x.gamma.site/",
    color: "bg-yellow-100 text-yellow-600",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700"
  }
];

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-8 px-4 md:px-8 text-center shadow-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide mb-4">
              ✅ ACESSO LIBERADO
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-2">
              Parabéns pela sua decisão!
            </h1>
            <p className="text-stone-600 text-lg">
              Aqui está todo o material para começar sua transformação agora mesmo.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content Grid */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${module.color} transition-transform group-hover:scale-110 duration-300`}>
                  {module.icon}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                  {module.title}
                </h3>
                
                <p className="text-stone-600 mb-8 flex-grow">
                  {module.description}
                </p>
                
                <a 
                  href={module.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-xl text-white font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-lg ${module.buttonColor}`}
                >
                  Acessar Agora <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 text-center border border-stone-200 shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-2xl font-bold mb-4">Precisa de ajuda?</h3>
          <p className="text-stone-600 mb-8">
            Se tiver qualquer dificuldade para acessar os materiais, entre em contato com nosso suporte.
          </p>
          <button className="text-brand-600 font-bold hover:underline">
            Falar com Suporte
          </button>
        </motion.div>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm mt-12">
        <p>© 2024 Transição Capilar Acelerada. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
