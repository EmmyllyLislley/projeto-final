  
    // FAKE DATA STORE essa parte deve ser substituida banco de dados
    const COLORS = ['#1A8FFF', '#00C2FF', '#4169E1', '#00CED1', '#20B2AA'];
    let DB = {
      users: [{ id: 'u1', username: 'cinephile', email: 'demo@cinelog.com', pass: 'demo123', color: '#1A8FFF', bio: 'Apaixonado por cinema', created: '2024-01-01' }],
      titles: [
        { id: 't1', title: 'Oppenheimer', og: 'Oppenheimer', type: 'movie', year: 2023, dir: 'Christopher Nolan', cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'], genres: ['Drama', 'Biografia', 'História'], synopsis: 'A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante o Projeto Manhattan.', poster: '../poster/oppenheimer.jpg', dur: 180, country: 'EUA', lang: 'Inglês' },
        { id: 't2', title: 'Duna: Parte 2', og: 'Dune: Part Two', type: 'movie', year: 2024, dir: 'Denis Villeneuve', cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'], genres: ['Ficção Científica', 'Aventura', 'Drama'], synopsis: 'Paul Atreides une forças com Chani e os Fremen enquanto busca vingar-se dos conspiradores que destruíram sua família.', poster:'../poster/duna2.jpg'},
        { id: 't3', title: 'Pobres Criaturas', og: 'Poor Things', type: 'movie', year: 2023, dir: 'Yorgos Lanthimos', cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe'], genres: ['Fantasia', 'Romance', 'Comédia'], synopsis: 'Bella Baxter foge sob a proteção de um advogado oportunista em busca de experiências para se descobrir.', poster: '../poster/pobrescriaturas.jpg', dur: 141, country: 'Reino Unido', lang: 'Inglês' },
        { id: 't4', title: 'Anora', og: 'Anora', type: 'movie', year: 2024, dir: 'Sean Baker', cast: ['Mikey Madison', 'Yura Borisov', 'Karren Karagulian'], genres: ['Drama', 'Romance', 'Comédia'], synopsis: 'Uma jovem dançarina de Nova York se casa impulsivamente com o filho de um oligarca russo.', poster: './poster/anora.jpg', dur: 139, country: 'EUA', lang: 'Inglês' },
        { id: 't5', title: 'Succession', og: 'Succession', type: 'series', year: 2018, dir: 'Jesse Armstrong', cast: ['Brian Cox', 'Jeremy Strong', 'Sarah Snook', 'Kieran Culkin'], genres: ['Drama', 'Comédia Negra'], synopsis: 'A família Roy controla um dos maiores conglomerados de mídia do mundo. Mas quem será o próximo a comandar o império?', poster: './poster/succession.jpg', dur: 39, country: 'EUA', lang: 'Inglês' },
        { id: 't6', title: 'The Bear', og: 'The Bear', type: 'series', year: 2022, dir: 'Christopher Storer', cast: ['Jeremy Allen White', 'Ayo Edebiri', 'Ebon Moss-Bachrach'], genres: ['Drama', 'Comédia'], synopsis: 'Um chef de classe mundial retorna a Chicago para administrar o restaurante de sua família após uma tragédia.', poster: './poster/thebear.jpg', dur: 18, country: 'EUA', lang: 'Inglês' },
        { id: 't7', title: 'Shōgun', og: 'Shōgun', type: 'series', year: 2024, dir: 'Rachel Kondo', cast: ['Hiroyuki Sanada', 'Cosmo Jarvis', 'Anna Sawai'], genres: ['Drama', 'Ação'], synopsis: 'No Japão feudal de 1600, um navegador inglês se envolve nos jogos políticos entre senhores feudais.', poster: './poster/shōgun.jpg', dur: 10, country: 'EUA/Japão', lang: 'Inglês/Japonês' },
        { id: 't8', title: 'Parasita', og: '기생충', type: 'movie', year: 2019, dir: 'Bong Joon-ho', cast: ['Song Kang-ho', 'Choi Woo-shik', 'Park So-dam'], genres: ['Thriller', 'Drama', 'Comédia Negra'], synopsis: 'A família Ki-taek sobrevive precariamente até o filho conseguir emprego como tutor de inglês numa família rica.', poster: './poster/parasita.jpg', dur: 132, country: 'Coreia do Sul', lang: 'Coreano' },
        { id: 't9', title: 'Interestelar', og: 'Interstellar', type: 'movie', year: 2014, dir: 'Christopher Nolan', cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'], genres: ['Ficção Científica', 'Drama', 'Aventura'], synopsis: 'Uma equipe de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.', poster: './poster/interestelar.jpg', dur: 169, country: 'EUA', lang: 'Inglês' },
        { id: 't10', title: 'Clube da Luta', og: 'Fight Club', type: 'movie', year: 1999, dir: 'David Fincher', cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'], genres: ['Drama', 'Thriller'], synopsis: 'Um homem insatisfeito com sua vida conhece o carismático Tyler Durden e funda um clube secreto de luta.', poster: './poster/clubedaluta.jpg', dur: 139, country: 'EUA', lang: 'Inglês' },
        { id: 't11', title: 'Whiplash: Em Busca da Perfeição', og: 'Whiplash', type: 'movie', year: 2014, dir: 'Damien Chazelle', cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'], genres: ['Drama', 'Música'], synopsis: 'Um jovem baterista enfrenta um professor implacável em sua busca pela excelência musical.', poster: './poster/whiplash.jpg', dur: 107, country: 'EUA', lang: 'Inglês' },
        { id: 't12', title: 'A Origem', og: 'Inception', type: 'movie', year: 2010, dir: 'Christopher Nolan', cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'], genres: ['Ficção Científica', 'Ação', 'Thriller'], synopsis: 'Um ladrão especializado em roubar segredos através dos sonhos recebe uma missão impossível.', poster: './poster/aorigem.jpg', dur: 148, country: 'EUA', lang: 'Inglês' },
        { id: 't13', title: 'La La Land: Cantando Estações', og: 'La La Land', type: 'movie', year: 2016, dir: 'Damien Chazelle', cast: ['Ryan Gosling', 'Emma Stone', 'John Legend'], genres: ['Romance', 'Drama', 'Musical'], synopsis: 'Um músico e uma aspirante a atriz tentam equilibrar amor e ambição em Los Angeles.', poster: './poster/lalaland.jpg', dur: 128, country: 'EUA', lang: 'Inglês' },
        { id: 't14', title: 'Tudo em Todo Lugar ao Mesmo Tempo', og: 'Everything Everywhere All at Once', type: 'movie', year: 2022, dir: 'Daniel Kwan e Daniel Scheinert', cast: ['Michelle Yeoh', 'Ke Huy Quan', 'Stephanie Hsu'], genres: ['Ficção Científica', 'Comédia', 'Aventura'], synopsis: 'Uma imigrante chinesa descobre que deve salvar o multiverso conectando-se a versões alternativas de si mesma.', poster: './poster/tudoemtodolugar.jpg', dur: 139, country: 'EUA', lang: 'Inglês' },          
        { id: 't15', title: 'Breaking Bad', og: 'Breaking Bad', type: 'series', year: 2008, dir: 'Vince Gilligan', cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'], genres: ['Drama', 'Crime'], synopsis: 'Um professor de química diagnosticado com câncer entra no mundo do tráfico de metanfetamina.', poster: './poster/breakingbad.jpg', dur: 49, country: 'EUA', lang: 'Inglês' },
        { id: 't16', title: 'Better Call Saul', og: 'Better Call Saul', type: 'series', year: 2015, dir: 'Vince Gilligan e Peter Gould', cast: ['Bob Odenkirk', 'Rhea Seehorn', 'Jonathan Banks'], genres: ['Drama', 'Crime'], synopsis: 'A trajetória de Jimmy McGill antes de se tornar o advogado Saul Goodman.', poster: './poster/bettercallsaul.jpg', dur: 46, country: 'EUA', lang: 'Inglês' },
        { id: 't17', title: 'Ruptura', og: 'Severance', type: 'series', year: 2022, dir: 'Dan Erickson', cast: ['Adam Scott', 'Britt Lower', 'Patricia Arquette'], genres: ['Drama', 'Ficção Científica', 'Mistério'], synopsis: 'Funcionários de uma empresa passam por um procedimento que separa suas memórias profissionais das pessoais.', poster: './poster/ruptura.jpg', dur: 50, country: 'EUA', lang: 'Inglês' },
        { id: 't18', title: 'Dark', og: 'Dark', type: 'series', year: 2017, dir: 'Baran bo Odar', cast: ['Louis Hofmann', 'Lisa Vicari', 'Andreas Pietschmann'], genres: ['Ficção Científica', 'Mistério', 'Drama'], synopsis: 'O desaparecimento de uma criança revela segredos envolvendo viagens no tempo em uma pequena cidade alemã.', poster: './poster/dark.jpg', dur: 60, country: 'Alemanha', lang: 'Alemão' },
        { id: 't19', title: 'The Last of Us', og: 'The Last of Us', type: 'series', year: 2023, dir: 'Craig Mazin e Neil Druckmann', cast: ['Pedro Pascal', 'Bella Ramsey', 'Anna Torv'], genres: ['Drama', 'Aventura', 'Pós-Apocalíptico'], synopsis: 'Após uma pandemia devastadora, um sobrevivente é encarregado de proteger uma jovem que pode mudar o destino da humanidade.', poster: './poster/thelastofus.jpg', dur: 55, country: 'EUA', lang: 'Inglês' },
        { id: 't20', title: 'Arcane', og: 'Arcane', type: 'series', year: 2021, dir: 'Christian Linke e Alex Yee', cast: ['Hailee Steinfeld', 'Ella Purnell', 'Kevin Alejandro'], genres: ['Animação', 'Ação', 'Fantasia'], synopsis: 'Em meio ao conflito entre Piltover e Zaun, duas irmãs seguem caminhos opostos.', poster: './poster/arcane.jpg', dur: 40, country: 'França/EUA', lang: 'Inglês' },
        {id: 't21', title: 'Cidade de Deus', og: 'Cidade de Deus', type: 'movie', year: 2002, dir: 'Fernando Meirelles', cast: ['Alexandre Rodrigues', 'Leandro Firmino', 'Phellipe Haagensen'], genres: ['Crime', 'Drama'], synopsis: 'A ascensão do crime organizado em uma favela do Rio de Janeiro vista pelos olhos de um jovem fotógrafo.', poster: './poster/cidadededeus.jpg', dur: 130, country: 'Brasil', lang: 'Português' },
        { id: 't22', title: 'O Poderoso Chefão', og: 'The Godfather', type: 'movie', year: 1972, dir: 'Francis Ford Coppola', cast: ['Marlon Brando', 'Al Pacino', 'James Caan'], genres: ['Crime', 'Drama'], synopsis: 'A poderosa família Corleone luta para manter seu império mafioso nos Estados Unidos.', poster: './poster/opoderosochefao.jpg', dur: 175, country: 'EUA', lang: 'Inglês' },
        { id: 't23', title: 'Pulp Fiction', og: 'Pulp Fiction', type: 'movie', year: 1994, dir: 'Quentin Tarantino', cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'], genres: ['Crime', 'Drama'], synopsis: 'Histórias interligadas de criminosos, boxeadores e assassinos em Los Angeles.', poster: './poster/pulpfiction.jpg', dur: 154, country: 'EUA', lang: 'Inglês' },
        { id: 't24', title: 'O Cavaleiro das Trevas', og: 'The Dark Knight', type: 'movie', year: 2008, dir: 'Christopher Nolan', cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'], genres: ['Ação', 'Crime', 'Drama'], synopsis: 'Batman enfrenta o Coringa, um criminoso caótico que ameaça Gotham City.', poster: './poster/ocavaleirodastrevas.jpg', dur: 152, country: 'EUA', lang: 'Inglês' },
        { id: 't25', title: 'Forrest Gump', og: 'Forrest Gump', type: 'movie', year: 1994, dir: 'Robert Zemeckis', cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'], genres: ['Drama', 'Romance'], synopsis: 'Um homem simples presencia e influencia eventos marcantes da história americana.', poster: './poster/forrestgump.jpg', dur: 142, country: 'EUA', lang: 'Inglês' },
        { id: 't26', title: 'A Viagem de Chihiro', og: '千と千尋の神隠し', type: 'movie', year: 2001, dir: 'Hayao Miyazaki', cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'], genres: ['Animação', 'Fantasia', 'Aventura'], synopsis: 'Uma garota entra em um mundo mágico para salvar seus pais transformados em porcos.', poster: './poster/chihiro.jpg', dur: 125, country: 'Japão', lang: 'Japonês' },
        { id: 't27', title: 'O Senhor dos Anéis: O Retorno do Rei', og: 'The Lord of the Rings: The Return of the King', type: 'movie', year: 2003, dir: 'Peter Jackson', cast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'], genres: ['Fantasia', 'Aventura', 'Drama'], synopsis: 'A batalha final pela Terra-média decide o destino do Um Anel.', poster: './poster/retornodorei.jpg', dur: 201, country: 'Nova Zelândia', lang: 'Inglês' },
        { id: 't28', title: 'Gladiador', og: 'Gladiator', type: 'movie', year: 2000, dir: 'Ridley Scott', cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'], genres: ['Ação', 'Drama', 'História'], synopsis: 'Um general romano busca vingança após ser traído e perder sua família.', poster: './poster/gladiador.jpg', dur: 155, country: 'EUA', lang: 'Inglês' },
        { id: 't29', title: 'Blade Runner 2049', og: 'Blade Runner 2049', type: 'movie', year: 2017, dir: 'Denis Villeneuve', cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'], genres: ['Ficção Científica', 'Drama'], synopsis: 'Um caçador de androides descobre um segredo capaz de mudar a sociedade.', poster: './poster/bladerunner2049.jpg', dur: 164, country: 'EUA', lang: 'Inglês' },
        { id: 't30', title: 'Mad Max: Estrada da Fúria', og: 'Mad Max: Fury Road', type: 'movie', year: 2015, dir: 'George Miller', cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'], genres: ['Ação', 'Aventura', 'Ficção Científica'], synopsis: 'Em um mundo pós-apocalíptico, Max se une a Furiosa para escapar de um tirano.', poster: './poster/madmax.jpg', dur: 120, country: 'Austrália', lang: 'Inglês' },
        { id: 't31', title: 'Cisne Negro', og: 'Black Swan', type: 'movie', year: 2010, dir: 'Darren Aronofsky', cast: ['Natalie Portman', 'Mila Kunis', 'Vincent Cassel'], genres: ['Drama', 'Thriller', 'Psicológico'], synopsis: 'Uma bailarina enfrenta pressão extrema ao interpretar o papel principal de O Lago dos Cisnes.', poster: './poster/cisnenegro.jpg', dur: 108, country: 'EUA', lang: 'Inglês' },
        { id: 't32', title: 'O Grande Hotel Budapeste', og: 'The Grand Budapest Hotel', type: 'movie', year: 2014, dir: 'Wes Anderson', cast: ['Ralph Fiennes', 'Tony Revolori', 'Saoirse Ronan'], genres: ['Comédia', 'Drama', 'Aventura'], synopsis: 'As aventuras de um concierge lendário e seu jovem aprendiz em um luxuoso hotel europeu.', poster: './poster/grandbudapest.jpg', dur: 99, country: 'Alemanha', lang: 'Inglês' },
        { id: 't33', title: 'Corra!', og: 'Get Out', type: 'movie', year: 2017, dir: 'Jordan Peele', cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'], genres: ['Terror', 'Mistério', 'Thriller'], synopsis: 'Um jovem visita a família de sua namorada e descobre um segredo perturbador.', poster: './poster/corra.jpg', dur: 104, country: 'EUA', lang: 'Inglês' },
        { id: 't34', title: 'Her', og: 'Her', type: 'movie', year: 2013, dir: 'Spike Jonze', cast: ['Joaquin Phoenix', 'Scarlett Johansson', 'Amy Adams'], genres: ['Drama', 'Romance', 'Ficção Científica'], synopsis: 'Um homem solitário desenvolve um relacionamento com uma inteligência artificial.', poster: './poster/her.jpg', dur: 126, country: 'EUA', lang: 'Inglês' },
        { id: 't35', title: 'Drive', og: 'Drive', type: 'movie', year: 2011, dir: 'Nicolas Winding Refn', cast: ['Ryan Gosling', 'Carey Mulligan', 'Bryan Cranston'], genres: ['Crime', 'Drama', 'Thriller'], synopsis: 'Um motorista dublê se envolve em uma perigosa trama criminosa.', poster: './poster/drive.jpg', dur: 100, country: 'EUA', lang: 'Inglês' },
        { id: 't36', title: 'O Farol', og: 'The Lighthouse', type: 'movie', year: 2019, dir: 'Robert Eggers', cast: ['Robert Pattinson', 'Willem Dafoe'], genres: ['Drama', 'Fantasia', 'Terror'], synopsis: 'Dois faroleiros isolados começam a perder a sanidade em uma ilha remota.', poster: './poster/ofarol.jpg', dur: 109, country: 'EUA', lang: 'Inglês' },
        { id: 't37', title: 'A Chegada', og: 'Arrival', type: 'movie', year: 2016, dir: 'Denis Villeneuve', cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'], genres: ['Ficção Científica', 'Drama'], synopsis: 'Uma linguista é convocada para se comunicar com visitantes extraterrestres.', poster: './poster/achegada.jpg', dur: 116, country: 'EUA', lang: 'Inglês' },
        { id: 't38', title: 'Prisioneiros', og: 'Prisoners', type: 'movie', year: 2013, dir: 'Denis Villeneuve', cast: ['Hugh Jackman', 'Jake Gyllenhaal', 'Paul Dano'], genres: ['Thriller', 'Crime', 'Drama'], synopsis: 'Um pai desesperado busca sua filha desaparecida enquanto a polícia investiga o caso.', poster: './poster/prisioneiros.jpg', dur: 153, country: 'EUA', lang: 'Inglês' },
        { id: 't39', title: 'Joias Brutas', og: 'Uncut Gems', type: 'movie', year: 2019, dir: 'Josh Safdie e Benny Safdie', cast: ['Adam Sandler', 'Julia Fox', 'Idina Menzel'], genres: ['Crime', 'Drama', 'Thriller'], synopsis: 'Um joalheiro viciado em apostas tenta quitar suas dívidas em uma sequência de decisões arriscadas.', poster: './poster/joiasbrutas.jpg', dur: 135, country: 'EUA', lang: 'Inglês' },
        { id: 't40', title: 'Os Infiltrados', og: 'The Departed', type: 'movie', year: 2006, dir: 'Martin Scorsese', cast: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'], genres: ['Crime', 'Drama', 'Thriller'], synopsis: 'Um policial infiltrado e um criminoso infiltrado tentam descobrir a identidade um do outro.', poster: './poster/osinfiltrados.jpg', dur: 151, country: 'EUA', lang: 'Inglês' },
        { id: 't41', title: 'Taxi Driver', og: 'Taxi Driver', type: 'movie', year: 1976, dir: 'Martin Scorsese', cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'], genres: ['Drama', 'Crime'], synopsis: 'Um veterano da guerra do Vietnã trabalha como taxista e mergulha na solidão e obsessão.', poster: './poster/taxidriver.jpg', dur: 114, country: 'EUA', lang: 'Inglês' },
        { id: 't42', title: 'Oldboy', og: '올드보이', type: 'movie', year: 2003, dir: 'Park Chan-wook', cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'], genres: ['Thriller', 'Mistério', 'Drama'], synopsis: 'Após anos de cárcere inexplicável, um homem busca vingança contra seu captor.', poster: './poster/oldboy.jpg', dur: 120, country: 'Coreia do Sul', lang: 'Coreano' },
        { id: 't43', title: 'Memórias de um Assassino', og: '살인의 추억', type: 'movie', year: 2003, dir: 'Bong Joon-ho', cast: ['Song Kang-ho', 'Kim Sang-kyung', 'Kim Roi-ha'], genres: ['Crime', 'Drama', 'Mistério'], synopsis: 'Detetives investigam uma série de assassinatos em uma pequena cidade sul-coreana.', poster: './poster/memoriasdeumassassino.jpg', dur: 132, country: 'Coreia do Sul', lang: 'Coreano' },
        { id: 't44', title: 'O Show de Truman', og: 'The Truman Show', type: 'movie', year: 1998, dir: 'Peter Weir', cast: ['Jim Carrey', 'Laura Linney', 'Ed Harris'], genres: ['Drama', 'Comédia'], synopsis: 'Um homem descobre que sua vida inteira é transmitida como um reality show.', poster: './poster/trumanshow.jpg', dur: 103, country: 'EUA', lang: 'Inglês' },
        { id: 't45', title: 'A Rede Social', og: 'The Social Network', type: 'movie', year: 2010, dir: 'David Fincher', cast: ['Jesse Eisenberg', 'Andrew Garfield', 'Justin Timberlake'], genres: ['Drama', 'Biografia'], synopsis: 'A criação do Facebook e os conflitos que surgiram durante sua ascensão.', poster: './poster/aredesocial.jpg', dur: 120, country: 'EUA', lang: 'Inglês' },
        { id: 't46', title: 'Birdman', og: 'Birdman', type: 'movie', year: 2014, dir: 'Alejandro G. Iñárritu', cast: ['Michael Keaton', 'Edward Norton', 'Emma Stone'], genres: ['Drama', 'Comédia'], synopsis: 'Um ator tenta recuperar sua relevância artística montando uma peça na Broadway.', poster: './poster/birdman.jpg', dur: 119, country: 'EUA', lang: 'Inglês' },
        { id: 't47', title: 'Moonlight', og: 'Moonlight', type: 'movie', year: 2016, dir: 'Barry Jenkins', cast: ['Trevante Rhodes', 'André Holland', 'Mahershala Ali'], genres: ['Drama'], synopsis: 'A jornada de autodescoberta de um jovem negro em diferentes fases da vida.', poster: './poster/moonlight.jpg', dur: 111, country: 'EUA', lang: 'Inglês' },
        { id: 't48', title: 'Os Suspeitos', og: 'The Usual Suspects', type: 'movie', year: 1995, dir: 'Bryan Singer', cast: ['Kevin Spacey', 'Gabriel Byrne', 'Benicio del Toro'], genres: ['Crime', 'Mistério', 'Thriller'], synopsis: 'Um sobrevivente conta a história de um grupo de criminosos envolvidos em um grande golpe.', poster: './poster/ossuspeitos.jpg', dur: 106, country: 'EUA', lang: 'Inglês' },
        { id: 't49', title: 'Psicose', og: 'Psycho', type: 'movie', year: 1960, dir: 'Alfred Hitchcock', cast: ['Anthony Perkins', 'Janet Leigh', 'Vera Miles'], genres: ['Terror', 'Mistério', 'Thriller'], synopsis: 'Uma secretária foge após roubar dinheiro e se hospeda em um motel sinistro.', poster: './poster/psicose.jpg', dur: 109, country: 'EUA', lang: 'Inglês' },
        { id: 't50', title: 'Casablanca', og: 'Casablanca', type: 'movie', year: 1942, dir: 'Michael Curtiz', cast: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid'], genres: ['Drama', 'Romance', 'Guerra'], synopsis: 'Durante a Segunda Guerra Mundial, um dono de cassino reencontra um antigo amor.', poster: './poster/casablanca.jpg', dur: 102, country: 'EUA', lang: 'Inglês' }
      ],
      reviews: [
        { id: 'r1', uid: 'u1', tid: 't1', rating: 4.5, text: 'Obra-prima. Nolan no seu auge absoluto.', spoiler: false, liked: true, date: '2023-08-01', created: '2023-08-02' },
        { id: 'r2', uid: 'u1', tid: 't5', rating: 5, text: 'A melhor série já produzida. Cada diálogo é cirúrgico.', spoiler: false, liked: true, date: '2023-06-15', created: '2023-06-16' },
        { id: 'r3', uid: 'u1', tid: 't8', rating: 4.5, text: 'Genial do início ao fim. Bong Joon-ho é brilhante.', spoiler: false, liked: true, date: '2022-10-10', created: '2022-10-11' },
      ],
      watchlists: [
        { id: 'wl1', uid: 'u1', name: 'Para Assistir', desc: 'Minha fila principal', pub: true, created: '2024-01-01' },
        { id: 'wl2', uid: 'u1', name: 'Favoritos 2024', desc: 'Os melhores que vi este ano', pub: true, created: '2024-01-15' },
      ],
      wlItems: [
        { id: 'wi1', wlid: 'wl1', tid: 't2', status: 'pending', added: '2024-03-01' },
        { id: 'wi2', wlid: 'wl1', tid: 't3', status: 'watched', added: '2024-03-05' },
        { id: 'wi3', wlid: 'wl2', tid: 't7', status: 'watched', added: '2024-04-01' },
      ],
      favs: ['t1', 't5', 't8'],
    };

    let currentUser = null;
    let catFilter = { type: '', genre: '' };
    let srchTimer = null;
    let uid = () => Math.random().toString(36).slice(2, 10);

    // AUTH 
    function switchLoginTab(tab) {
      document.querySelectorAll('.ltab').forEach((t, i) => t.classList.toggle('on', i === (tab === 'login' ? 0 : 1)));
      document.getElementById('lf-login').classList.toggle('on', tab === 'login');
      document.getElementById('lf-register').classList.toggle('on', tab === 'register');
    }

    function doLogin() {

      //pega os dados da tela do user
      const email = document.getElementById(`l-email`).value.trim();
      const pass = document.getElementById(`l-pass`).value;
      const err = document.getElementById('l-err');

      //envia os dados para o servidor
      fetch(`https://localhost:1958/login`, {
        method: `POST`,
        header: {'Content-Type': 'application.json'},
        body: JSON.stringify({email: email, pass: pass})
      })

      //tratamento da resposta do servidor - assíncrona
      .then(response => response.json())
      //caso dê erro no login
      .then(data => {if (data.erro) { 
        err.textContent = data.erro;
        err.style.display = 'block';}
      //caso o login seja bem-sucedido
        else {err.style.display = 'none';}
      //salva a sessão do usuário
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      //criação do objeto do user local
      const u = {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        bio: '',
        created: new Date().toISOString()
      };
      loginSuccess(u);
    }) 
    .catch(error => {
      console.error('Erro:', error);
      err.textContent = 'Erro ao conectar com servidor';
      err.style.display = 'block';
    })
  }

    

    function doRegister() {
      const username = document.getElementById('r-user').value.trim();
      const email = document.getElementById('r-email').value.trim();
      const pass = document.getElementById('r-pass').value;
      const err = document.getElementById('r-err');
      if (!username || !email || !pass) { err.textContent = 'Todos os campos são obrigatórios.'; err.style.display = 'block'; return; }
      if (pass.length < 6) { err.textContent = 'Senha deve ter no mínimo 6 caracteres.'; err.style.display = 'block'; return; }
      if (DB.users.find(u => u.email === email)) { err.textContent = 'Email já cadastrado.'; err.style.display = 'block'; return; }
      if (DB.users.find(u => u.username === username)) { err.textContent = 'Username já em uso.'; err.style.display = 'block'; return; }
      const u = { id: 'u' + uid(), username, email, pass, color: COLORS[Math.floor(Math.random() * COLORS.length)], bio: '', created: new Date().toISOString() };
      DB.users.push(u);
      err.style.display = 'none';
      loginSuccess(u);
    }

    function demoLogin() {
      document.getElementById('l-email').value = 'demo@cinelog.com';
      document.getElementById('l-pass').value = 'demo123';
      doLogin();
    }

    function loginSuccess(u) {
      currentUser = u;
      document.getElementById('loginPage').classList.remove('on');
      document.getElementById('mainNav').style.display = 'flex';
      renderNavLinks();
      goPage('home');
      toast('Bem-vindo(a), @' + u.username + '! 🎬', 'ok');
    }

    function doLogout() {
      currentUser = null;
      document.getElementById('loginPage').classList.add('on');
      document.getElementById('mainNav').style.display = 'none';
      document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
      toast('Até logo! 👋', 'ok');
    }

    function renderNavLinks() {
      const inits = currentUser.username.slice(0, 2).toUpperCase();
      document.getElementById('navLinks').innerHTML = `
    <button class="nbtn" onclick="goPage('catalog')">🎬 Catálogo</button>
    <button class="nbtn" onclick="goPage('watchlists')">📋 Listas</button>
    <div class="drop">
      <div class="avatar-btn" style="background:${currentUser.color}22;color:${currentUser.color}" onclick="toggleDrop('umenu')">${inits}</div>
      <div class="drop-menu" id="umenu">
        <button class="ditem" onclick="goPage('profile');closeDrop('umenu')">👤 Perfil</button>
        <div class="ddiv"></div>
        <button class="ditem red" onclick="doLogout()">↩ Sair</button>
      </div>
    </div>`;
      const ab = document.getElementById('addTitleBtn');
      if (ab) ab.style.display = 'flex';
    }

    // NAVIGATION 
    function goPage(p, param) {
      document.querySelectorAll('.page').forEach(x => x.classList.remove('on'));
      const el = document.getElementById('page-' + p);
      if (el) { el.classList.add('on'); }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (p === 'home') renderHome();
      else if (p === 'catalog') renderCatalog();
      else if (p === 'watchlists') renderWatchlists();
      else if (p === 'profile') renderProfile();
      else if (p === 'detail') renderDetail(param);
      else if (p === 'listdetail') renderListDetail(param);
    }

    function goPageCat(type) { catFilter.type = type; goPage('catalog'); document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.dataset.t === type)); }

    // HOME 
    function renderHome() {
      fetch(`http://localhost:1958/titles`)
      .then(response => responde.json())
      .then(titles => {
        //mostra os 6 primeiros itens de títulos, o cardHTML passa tudo para o estilo HTML de nome e mostra na página
        //o join('') junta tudo isso em uma grande string, depois interpretada pelo innerHTML para a user interface
        document.getElementById('home-all'.innerHTML = titles.slice(0, 6).map(cardHTML).join('')); //se for qualquer
        document.getElementById('home-movies').innerHTML = titles.filter(t => t.type === 'movie').slice(0, 5).map(cardHTML).join(''); //se for filme
        document.getElementById('home-series').innerHTML = titles.filter(t => t.type === 'series').slice(0, 5).map(cardHTML).join(''); //se for série
      })
    }

    // CATALOGO
    function renderCatalog(search) {
      const ab = document.getElementById('addTitleBtn');
      if (ab) ab.style.display = currentUser ? 'flex' : 'none';
      fetch('http://localhost:1958/titles') //busca filmes do backend
      .then(response => responde.json())
      .then(filmes => {
        let titles = filmes;
        //filtra por tipo de filme nos seletores (filme/série, gênero e etc.)
        if (catFilter.type) {
          titles = titles.filter(t => t.type === catFilter.type)
        }
        const grid = document.getElementById('cat-grid');
        const empty = document.getElementById('cat-empty');

        if (titles.length === 0) { //se não tem título, a grade fica vazia e bloqueia
          grid.innerHTML = '';
          empty.style.display = 'block' 
        } else { //se tem título, a grade mostra os filmes/séries (busca todos pra mostrar pelo map())
          empty.style.display = 'none';
          grid.innerHTML = titles.map(cardHTML).join('')
        }
      })
    }

    //SEARCH 
    function showSearch(q) {
      goPage('search');
      document.getElementById('srch-title').textContent = `Resultados para "${q}"`;
      let titles = [...DB.titles];
      const ql = q.toLowerCase();
      titles = titles.filter(t => t.title.toLowerCase().includes(ql) || t.dir.toLowerCase().includes(ql) || (t.cast || []).some(a => a.toLowerCase().includes(ql)) || (t.genres || []).some(g => g.toLowerCase().includes(ql)));
      const grid = document.getElementById('srch-grid');
      const empty = document.getElementById('srch-empty');
      if (!titles.length) { grid.innerHTML = ''; empty.style.display = 'block'; }
      else { empty.style.display = 'none'; grid.innerHTML = titles.map(cardHTML).join(''); }
    }

    // CARD
    function cardHTML(t) {
      const stats = ratingStats(t.id);
      const poster = t.poster
        ? `<img class="tcard-poster" src="${t.poster}" alt="${esc(t.title)}" loading="lazy" onerror="this.outerHTML='<div class=tcard-ph><span>${t.type === 'series' ? '📺' : '🎬'}</span><small>${t.type === 'series' ? 'SÉRIE' : 'FILME'}</small></div>'"/>`
        : `<div class="tcard-ph"><span>${t.type === 'series' ? '📺' : '🎬'}</span><small>${t.type === 'series' ? 'SÉRIE' : 'FILME'}</small></div>`;
      return `<div class="tcard" onclick="goPage('detail','${t.id}')">
    <div class="type-badge">${t.type === 'series' ? 'Série' : 'Filme'}</div>
    ${poster}
    <div class="tcard-body">
      <div class="tcard-title">${esc(t.title)}</div>
      <div class="tcard-meta">${t.year || '—'}${t.dir ? ' · ' + esc(t.dir.split(' ').slice(0, 2).join(' ')) : ''}${t.dir.split(' ').length > 2 ? '…' : ''}</div>
      <div class="tcard-rating">${stars(stats.avg)}<span>${stats.avg ? stats.avg.toFixed(1) : '—'} ${stats.count ? '(' + stats.count + ')' : ''}</span></div>
    </div>
  </div>`;
    }

    function ratingStats(tid) {
      const rs = DB.reviews.filter(r => r.tid === tid);
      if (!rs.length) return { avg: 0, count: 0 };
      return { avg: Math.round(rs.reduce((s, r) => s + r.rating, 0) / rs.length * 10) / 10, count: rs.length };
    }

    function stars(avg) {
      if (!avg) return '☆☆☆☆☆';
      const f = Math.floor(avg), h = avg - f >= .25 ? 1 : 0, e = 5 - f - h;
      return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(e);
    }

    // DETAIL 
    function renderDetail(id) {
      if (!id) return;
      const t = DB.titles.find(x => x.id === id);
      if (!t) { document.getElementById('detail-root').innerHTML = '<div class="empty"><span class="empty-ico">😕</span><h3>Não encontrado</h3></div>'; return; }
      const stats = ratingStats(id);
      const isFav = DB.favs.includes(id);
      const myRev = currentUser ? DB.reviews.find(r => r.tid === id && r.uid === currentUser.id) : null;
      const revList = DB.reviews.filter(r => r.tid === id).map(r => {
        const u = DB.users.find(x => x.id === r.uid) || { username: '?', color: '#1A8FFF' };
        const inits = u.username.slice(0, 2).toUpperCase();
        return `<div class="rcard">
      <div class="rcard-head">
        <div class="rcard-user">
          <div class="ravatar" style="background:${u.color}22;color:${u.color}">${inits}</div>
          <div><div class="rname">@${esc(u.username)}</div><div class="rmeta"><span style="color:var(--star)">${stars(r.rating)}</span><span>${r.rating.toFixed(1)}</span>${r.date ? '<span>· ' + new Date(r.date).toLocaleDateString('pt-BR') + '</span>' : ''} ${r.liked ? '<span>❤️</span>' : ''}</div></div>
        </div>
        ${r.spoiler ? '<span class="spoiler-tag">⚠ Spoiler</span>' : ''}
      </div>
      ${r.text ? `<p class="rtext">${esc(r.text)}</p>` : ''}
    </div>`;
      }).join('');

      const poster = t.poster
        ? `<img class="d-poster" src="${t.poster}" alt="${esc(t.title)}" onerror="this.outerHTML='<div class=d-poster-ph>🎬</div>'"/>`
        : `<div class="d-poster-ph">🎬</div>`;

      document.getElementById('detail-root').innerHTML = `
    <button class="back-btn" onclick="history.back()">← Voltar</button>
    <div class="detail-hero">
      <div class="detail-layout">
        ${poster}
        <div>
          <div class="d-genres">${(t.genres || []).map(g => `<span class="gtag">${g}</span>`).join('')}</div>
          <h1 class="d-title">${esc(t.title)}</h1>
          ${t.og && t.og !== t.title ? `<div class="d-og">${esc(t.og)}</div>` : ''}
          <div class="d-meta">
            ${t.year ? `<span>📅 ${t.year}</span>` : ''}
            ${t.dur && t.type === 'movie' ? `<span>⏱ ${t.dur} min</span>` : ''}
            ${t.dur && t.type === 'series' ? `<span>📺 ${t.dur} ep</span>` : ''}
            ${t.dir ? `<span>🎬 ${esc(t.dir)}</span>` : ''}
            ${t.country ? `<span>🌍 ${esc(t.country)}</span>` : ''}
          </div>
          <div class="d-rating">
            ${stats.avg ? `<span class="d-avg">${stats.avg.toFixed(1)}</span>` : ''}
            <div>
              <div style="font-size:18px;color:var(--star)">${stars(stats.avg)}</div>
              <div style="font-size:11.5px;color:var(--txt2)">${stats.count} avaliações</div>
            </div>
          </div>
          <div class="d-actions">
            ${currentUser ? `
              <button class="btn btn-pri btn-sm" onclick="openRevModal('${id}','${esc(t.title)}')">${myRev ? '✏️ Editar Avaliação' : '⭐ Avaliar'}</button>
              <button class="btn btn-out btn-sm btn-fav ${isFav ? 'on' : ''}" id="favbtn-${id}" onclick="toggleFav('${id}')">
                ${isFav ? '❤️ Favorito' : '🤍 Favoritar'}
              </button>
              <button class="btn btn-out btn-sm" onclick="openATL('${id}')">📋 Adicionar à Lista</button>
            `: `<button class="btn btn-out btn-sm" onclick="openModal('m-review')">Entrar para avaliar</button>`}
          </div>
        </div>
      </div>
    </div>
    <div class="detail-body">
      ${t.synopsis ? `<div class="dsec"><h3>Sinopse</h3><p class="synopsis">${esc(t.synopsis)}</p></div>` : ''}
      ${t.cast && t.cast.length ? `<div class="dsec"><h3>Elenco</h3><div class="cast-wrap">${t.cast.map(a => `<span class="ctag">${esc(a)}</span>`).join('')}</div></div>` : ''}
      <div class="dsec">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <h3 style="border:none;margin:0">Avaliações (${DB.reviews.filter(r => r.tid === id).length})</h3>
        </div>
        ${revList || '<p style="color:var(--txt2);font-size:13.5px">Seja o primeiro a avaliar!</p>'}
      </div>
    </div>`;
    }

    // ─── REVIEW ───────────────────────────────────────────
    function openRevModal(tid, name) {
      if (!currentUser) { openModal('m-review'); return; }
      document.getElementById('rev-modal-title').textContent = 'Avaliar: ' + name;
      document.getElementById('rv-tid').value = tid;
      document.getElementById('rv-text').value = '';
      document.getElementById('rv-date').value = new Date().toISOString().split('T')[0];
      document.getElementById('rv-spoiler').checked = false;
      document.getElementById('rv-liked').checked = false;
      document.querySelectorAll('[name=rv]').forEach(r => r.checked = false);
      const existing = DB.reviews.find(r => r.tid === tid && r.uid === currentUser.id);
      if (existing) {
        const radio = document.querySelector(`[name=rv][value="${existing.rating}"]`);
        if (radio) radio.checked = true;
        document.getElementById('rv-text').value = existing.text || '';
        document.getElementById('rv-spoiler').checked = !!existing.spoiler;
        document.getElementById('rv-liked').checked = !!existing.liked;
        if (existing.date) document.getElementById('rv-date').value = existing.date;
      }
      openModal('m-review');
    }

    function doReview() {
      const rating = document.querySelector('[name=rv]:checked')?.value;
      if (!rating) { toast('Selecione uma avaliação!', 'err'); return; }
      const tid = document.getElementById('rv-tid').value;
      const existing = DB.reviews.findIndex(r => r.tid === tid && r.uid === currentUser.id);
      const rev = { id: 'r' + uid(), uid: currentUser.id, tid, rating: parseFloat(rating), text: document.getElementById('rv-text').value, spoiler: document.getElementById('rv-spoiler').checked, liked: document.getElementById('rv-liked').checked, date: document.getElementById('rv-date').value, created: new Date().toISOString() };
      if (existing >= 0) DB.reviews[existing] = rev; else DB.reviews.push(rev);
      closeModal('m-review');
      toast('Avaliação salva! ⭐', 'ok');
      renderDetail(tid);
    }

    // FAVORITOS
    function toggleFav(id) {
      const i = DB.favs.indexOf(id);
      if (i >= 0) DB.favs.splice(i, 1); else DB.favs.push(id);
      const btn = document.getElementById('favbtn-' + id);
      if (btn) { btn.classList.toggle('on', DB.favs.includes(id)); btn.innerHTML = DB.favs.includes(id) ? '❤️ Favorito' : '🤍 Favoritar'; }
      toast(DB.favs.includes(id) ? 'Adicionado aos favoritos ❤️' : 'Removido dos favoritos', 'ok');
    }

    // ADD TITULOS
    function doAddTitle() {
      const title = document.getElementById('at-title').value.trim();
      const type = document.getElementById('at-type').value;
      if (!title) { toast('Título é obrigatório!', 'err'); return; }
      const t = {
        id: 't' + uid(), title, og: document.getElementById('at-og').value || title, type,
        year: parseInt(document.getElementById('at-year').value) || null,
        dir: document.getElementById('at-dir').value,
        cast: document.getElementById('at-cast').value.split(',').map(s => s.trim()).filter(Boolean),
        genres: document.getElementById('at-genres').value.split(',').map(s => s.trim()).filter(Boolean),
        synopsis: document.getElementById('at-synopsis').value,
        poster: document.getElementById('at-poster').value,
        dur: parseInt(document.getElementById('at-dur').value) || null,
        country: document.getElementById('at-country').value,
        lang: document.getElementById('at-lang').value,
      };
      DB.titles.unshift(t);
      closeModal('m-add');
      ['at-title', 'at-og', 'at-year', 'at-dir', 'at-cast', 'at-genres', 'at-synopsis', 'at-poster', 'at-dur', 'at-country', 'at-lang'].forEach(i => { const el = document.getElementById(i); if (el) el.value = ''; });
      toast('Título adicionado! 🎬', 'ok');
      renderCatalog();
    }

    // WATCHLISTS
    function renderWatchlists() {
      if (!currentUser) {
        document.getElementById('wl-root').innerHTML = `<div class="empty"><span class="empty-ico">🔐</span><h3>Faça login</h3><p>Entre na sua conta para ver suas listas.</p></div>`;
        return;
      }
      const favTitles = DB.favs.map(id => DB.titles.find(t => t.id === id)).filter(Boolean);
      const myLists = DB.watchlists.filter(w => w.uid === currentUser.id);
      let html = '';
      if (favTitles.length) {
        html += `<div class="sec"><h3 style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.06em;margin-bottom:1rem">❤️ Favoritos (${favTitles.length})</h3><div class="tgrid">${favTitles.map(cardHTML).join('')}</div></div>`;
      }
      html += `<div class="sec"><h3 style="font-family:'Bebas Neue',sans-serif;font-size:1.35rem;letter-spacing:.06em;margin-bottom:1rem">📋 Listas</h3>`;
      if (!myLists.length) {
        html += `<div class="empty"><span class="empty-ico">📭</span><h3>Nenhuma lista</h3><p>Crie sua primeira lista!</p></div>`;
      } else {
        html += `<div class="wl-grid">${myLists.map(wl => {
          const items = DB.wlItems.filter(i => i.wlid === wl.id);
          const done = items.filter(i => i.status === 'watched').length;
          const pct = items.length ? Math.round(done / items.length * 100) : 0;
          return `<div class="wl-card" onclick="goPage('listdetail','${wl.id}')">
        <div class="wl-name">${esc(wl.name)}</div>
        <div class="wl-meta">${items.length} títulos · ${items.length - done} pendentes</div>
        <div class="wl-bar"><div class="wl-fill" style="width:${pct}%"></div></div>
        <div class="wl-pct">${pct}% assistido</div>
      </div>`;
        }).join('')}</div>`;
      }
      html += '</div>';
      document.getElementById('wl-root').innerHTML = html;
    }

    function doCreateList() {
      const name = document.getElementById('nl-name').value.trim();
      if (!name) { toast('Nome obrigatório!', 'err'); return; }
      DB.watchlists.push({ id: 'wl' + uid(), uid: currentUser.id, name, desc: document.getElementById('nl-desc').value, pub: true, created: new Date().toISOString() });
      document.getElementById('nl-name').value = '';
      document.getElementById('nl-desc').value = '';
      closeModal('m-newlist');
      toast('Lista criada! 📋', 'ok');
      renderWatchlists();
    }

    function renderListDetail(id) {
      const wl = DB.watchlists.find(w => w.id === id);
      if (!wl) { document.getElementById('listdetail-root').innerHTML = '<div class="empty"><span class="empty-ico">😕</span><h3>Lista não encontrada</h3></div>'; return; }
      const items = DB.wlItems.filter(i => i.wlid === id);
      const itemsHtml = items.length ? items.map(item => {
        const t = DB.titles.find(x => x.id === item.tid);
        if (!t) return '';
        const done = item.status === 'watched';
        const poster = t.poster ? `<img class="wi-poster" src="${t.poster}" onerror="this.style.display='none'" loading="lazy"/>` : `<div class="wi-ph">🎬</div>`;
        return `<div class="wi-row ${done ? 'done' : ''}" id="wli-${item.tid}">
      ${poster}
      <div class="wi-info" onclick="goPage('detail','${t.id}')" style="cursor:pointer">
        <div class="wi-title">${esc(t.title)}</div>
        <div class="wi-meta">${t.year || ''} · ${t.type === 'series' ? 'Série' : 'Filme'}</div>
      </div>
      <button class="status-btn ${done ? 'done' : ''}" onclick="toggleWLStatus('${id}','${item.tid}','${item.status}')">
        ${done ? '✅ Assistido' : '○ Pendente'}
      </button>
      <button class="del-btn" onclick="removeFromWL('${id}','${item.tid}')">✕</button>
    </div>`;
      }).join('') : `<div class="empty"><span class="empty-ico">📭</span><h3>Lista vazia</h3><p>Adicione títulos do catálogo!</p></div>`;

      document.getElementById('listdetail-root').innerHTML = `
    <button class="back-btn" onclick="goPage('watchlists')">← Minhas Listas</button>
    <div class="wrap" style="padding-bottom:3rem">
      <div class="sec-head" style="margin-bottom:1rem">
        <div><h2 class="sec-title">${esc(wl.name)}</h2>${wl.desc ? `<p style="color:var(--txt2);font-size:13px;margin-top:3px">${esc(wl.desc)}</p>` : ''}</div>
        <button class="btn btn-danger btn-sm" onclick="deleteList('${id}')">🗑 Excluir</button>
      </div>
      ${itemsHtml}
    </div>`;
    }

    function toggleWLStatus(wlid, tid, cur) {
      const item = DB.wlItems.find(i => i.wlid === wlid && i.tid === tid);
      if (item) item.status = cur === 'watched' ? 'pending' : 'watched';
      renderListDetail(wlid);
    }

    function removeFromWL(wlid, tid) {
      DB.wlItems = DB.wlItems.filter(i => !(i.wlid === wlid && i.tid === tid));
      toast('Removido', 'ok');
      renderListDetail(wlid);
    }

    function deleteList(id) {
      if (!confirm('Excluir esta lista?')) return;
      DB.watchlists = DB.watchlists.filter(w => w.id !== id);
      DB.wlItems = DB.wlItems.filter(i => i.wlid !== id);
      toast('Lista excluída', 'ok');
      goPage('watchlists');
    }

    //ADD TO LIST 
    function openATL(tid) {
      if (!currentUser) { openModal('m-review'); return; }
      document.getElementById('atl-tid').value = tid;
      const lists = DB.watchlists.filter(w => w.uid === currentUser.id);
      const opts = document.getElementById('atl-opts');
      if (!lists.length) {
        opts.innerHTML = `<div class="empty" style="padding:1.5rem"><span class="empty-ico" style="font-size:2rem">📋</span><h3>Sem listas</h3><button class="btn btn-pri btn-sm" style="margin-top:.8rem" onclick="closeModal('m-atl');openModal('m-newlist')">Nova Lista</button></div>`;
      } else {
        opts.innerHTML = lists.map(wl => `
      <button class="atl-row" onclick="addToList('${wl.id}','${tid}',this)">
        <span>📋 ${esc(wl.name)}</span>
        <span style="color:var(--txt2);font-size:12px">${DB.wlItems.filter(i => i.wlid === wl.id).length} títulos</span>
      </button>`).join('');
      }
      openModal('m-atl');
    }

    function addToList(wlid, tid, btn) {
      const exists = DB.wlItems.find(i => i.wlid === wlid && i.tid === tid);
      if (!exists) DB.wlItems.push({ id: 'wi' + uid(), wlid, tid, status: 'pending', added: new Date().toISOString() });
      btn.classList.add('added');
      btn.innerHTML = '<span>✅ Adicionado!</span>';
      toast('Adicionado à lista! 📋', 'ok');
      setTimeout(() => closeModal('m-atl'), 700);
    }

    // ─── PROFILE ─────────────────────────────────────────
    function renderProfile() {
      if (!currentUser) {
        document.getElementById('profile-root').innerHTML = `<div class="empty" style="padding-top:4rem"><span class="empty-ico">🔐</span><h3>Faça login</h3></div>`;
        return;
      }
      const myRevs = DB.reviews.filter(r => r.uid === currentUser.id);
      const avg = myRevs.length ? (myRevs.reduce((s, r) => s + r.rating, 0) / myRevs.length).toFixed(1) : 0;
      const myLists = DB.watchlists.filter(w => w.uid === currentUser.id);
      const inits = currentUser.username.slice(0, 2).toUpperCase();

      const revItems = myRevs.map(r => {
        const t = DB.titles.find(x => x.id === r.tid);
        if (!t) return '';
        const poster = t.poster ? `<img style="width:42px;height:63px;border-radius:5px;object-fit:cover;flex-shrink:0;border:1px solid var(--border)" src="${t.poster}" onerror="this.style.display='none'" loading="lazy"/>` : `<div style="width:42px;height:63px;border-radius:5px;background:var(--bg2);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">🎬</div>`;
        return `<div class="wi-row" onclick="goPage('detail','${t.id}')" style="cursor:pointer">
      ${poster}
      <div class="wi-info">
        <div class="wi-title">${esc(t.title)}</div>
        <div style="color:var(--star);font-size:13px;margin-bottom:2px">${stars(r.rating)} ${r.rating.toFixed(1)}</div>
        ${r.text ? `<div class="wi-meta">${esc(r.text.slice(0, 90))}${r.text.length > 90 ? '…' : ''}</div>` : ''}
      </div>
    </div>`;
      }).join('');

      document.getElementById('profile-root').innerHTML = `
    <div class="profile-hero">
      <div class="profile-layout">
        <div class="p-avatar" style="background:${currentUser.color}22;color:${currentUser.color}">${inits}</div>
        <div>
          <div class="p-name">@${esc(currentUser.username)}</div>
          <div class="p-email">${esc(currentUser.email)}</div>
          <div class="p-stats">
            <div><span class="pstat-val">${myRevs.length}</span><span class="pstat-label">Avaliações</span></div>
            <div><span class="pstat-val">${avg || '—'}</span><span class="pstat-label">Nota Média</span></div>
            <div><span class="pstat-val">${DB.favs.length}</span><span class="pstat-label">Favoritos</span></div>
            <div><span class="pstat-val">${myLists.length}</span><span class="pstat-label">Listas</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-body">
      <div class="sec-head" style="margin-bottom:1rem">
        <h2 class="sec-title">⭐ Minhas Avaliações</h2>
        <span class="sec-link" onclick="goPage('watchlists')">Ver favoritos →</span>
      </div>
      ${revItems || '<div class="empty"><span class="empty-ico" style="font-size:2rem">⭐</span><h3>Nenhuma avaliação</h3></div>'}
    </div>`;
    }

    // ─── MODAL / UTIL ─────────────────────────────────────
    function openModal(id) { document.getElementById(id)?.classList.add('on') }
    function closeModal(id) { document.getElementById(id)?.classList.remove('on') }
    function toggleDrop(id) { document.getElementById(id)?.classList.toggle('on') }
    function closeDrop(id) { document.getElementById(id)?.classList.remove('on') }
    function esc(s) { return s ? String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : '' }

    function toast(msg, type = 'ok') {
      const c = document.getElementById('toasts');
      const el = document.createElement('div');
      el.className = `toast ${type}`;
      el.innerHTML = `<span class="ti">${type === 'ok' ? '✓' : '✕'}</span><span>${msg}</span>`;
      c.appendChild(el);
      setTimeout(() => el.remove(), 3200);
    }

    // ─── EVENT LISTENERS ──────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
      // Close modals on overlay click
      document.querySelectorAll('.overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) o.classList.remove('on') }));
      // Close dropdowns outside
      document.addEventListener('click', e => { if (!e.target.closest('.drop')) document.querySelectorAll('.drop-menu').forEach(m => m.classList.remove('on')) });
      // Chips filter
      document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
        document.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
        c.classList.add('on'); catFilter.type = c.dataset.t;
        if (document.getElementById('page-catalog').classList.contains('on')) renderCatalog();
      }));
      // Genre filter
      document.getElementById('genreF').addEventListener('change', () => { if (document.getElementById('page-catalog').classList.contains('on')) renderCatalog() });
      // Search
      const gs = document.getElementById('gsearch');
      if (gs) gs.addEventListener('input', () => {
        clearTimeout(srchTimer);
        srchTimer = setTimeout(() => { const q = gs.value.trim(); if (q.length >= 1) showSearch(q); }, 320);
      });
      // Enter key on login forms
      document.getElementById('l-pass').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin() });
      document.getElementById('r-pass').addEventListener('keydown', e => { if (e.key === 'Enter') doRegister() });
    });
  
