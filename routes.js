import { Router } from "express"
import jwt from "jsonwebtoken"
import User from "./models/userModel.js"

const router = Router()

const users = [
    {
        id: "1vishnuuu",
        name: "Vishnu",
        gender: "male",
        email: "vishnu@gmail.com",
        password: "1234",
        profileImage: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
    }
]

const blogs = [
    {
        slug: "introduction-to-machine-learning",
        title: "Introduction to Machine Learning",
        author: "Vishnu Prasad Korada",
        authorId: "1vishnuuu",
        content: `* Machine learning * (ML) is a field of study in artificial intelligence concerned with the development and study of
        statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without
        explicit instructions.[1] Recently, generative artificial neural networks have been able to surpass many
        previous approaches in performance.[2][3]
        Machine learning approaches have been applied to many fields including large language models, computer vision,
        speech recognition, email filtering, agriculture, and medicine, where it is too costly to develop algorithms to
        perform the needed tasks.[4][5] ML is known in its application across business problems under the name
        predictive analytics. Although not all machine learning is statistically based, computational statistics is an
        important source of the field's methods.
        The mathematical foundations of ML are provided by mathematical optimization (mathematical programming) methods.
        Data mining is a related (parallel) field of study, focusing on exploratory data analysis through unsupervised
        learning.[7][8] From a theoretical point of view Probably approximately correct learning provides a framework
        for describing machine learning.

        ---

        ## History and relationships to other fields

        The term machine learning was coined in 1959 by Arthur Samuel, an IBM employee and pioneer in the field of
        computer gaming and artificial intelligence.[9][10] The synonym self-teaching computers was also used in this
        time period.[11][12]

        Although the earliest machine learning model was introduced in the 1950s when Arthur Samuel invented a program
        that calculated the winning chance in checkers for each side, the history of machine learning roots back to
        decades of human desire and effort to study human cognitive processes.[13] In 1949, Canadian psychologist Donald
        Hebb published the book The Organization of Behavior, in which he introduced a theoretical neural structure
        formed by certain interactions among nerve cells.[14] Hebb's model of neurons interacting with one another set a
        groundwork for how AIs and machine learning algorithms work under nodes, or artificial neurons used by computers
        to communicate data.[13] Other researchers who have studied human cognitive systems contributed to the modern
        machine learning technologies as well, including logician Walter Pitts and Warren McCulloch, who proposed the
        early mathematical models of neural networks to come up with algorithms that mirror human thought processes.[13]

        By the early 1960s an experimental "learning machine" with punched tape memory, called Cybertron, had been
        developed by Raytheon Company to analyze sonar signals, electrocardiograms, and speech patterns using
        rudimentary reinforcement learning. It was repetitively "trained" by a human operator/teacher to recognize
        patterns and equipped with a "goof" button to cause it to re-evaluate incorrect decisions.[15] A representative
        book on research into machine learning during the 1960s was Nilsson's book on Learning Machines, dealing mostly
        with machine learning for pattern classification.[16] Interest related to pattern recognition continued into the
        1970s, as described by Duda and Hart in 1973.[17] In 1981 a report was given on using teaching strategies so
        that an artificial neural network learns to recognize 40 characters (26 letters, 10 digits, and 4 special
        symbols) from a computer terminal.[18]

        Tom M. Mitchell provided a widely quoted, more formal definition of the algorithms studied in the machine
        learning field: "A computer program is said to learn from experience E with respect to some class of tasks T and
        performance measure P if its performance at tasks in T, as measured by P, improves with experience E."[19] This
        definition of the tasks in which machine learning is concerned offers a fundamentally operational definition
        rather than defining the field in cognitive terms. This follows Alan Turing's proposal in his paper "Computing
        Machinery and Intelligence", in which the question "Can machines think?" is replaced with the question "Can
        machines do what we (as thinking entities) can do?".[20]

        Modern-day machine learning has two objectives. One is to classify data based on models which have been
        developed; the other purpose is to make predictions for future outcomes based on these models. A hypothetical
        algorithm specific to classifying data may use computer vision of moles coupled with supervised learning in
        order to train it to classify the cancerous moles. A machine learning algorithm for stock trading may inform the
        trader of future potential predictions.`,
    },
    {
        slug: "operating-system",
        title: "Operating System",
        author: "Vishnu Prasad Korada",
        authorId: "1vishnuuu",
        content: `An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.
        Time-sharing operating systems schedule tasks for efficient use of the system and may also include accounting software for cost allocation of processor time, mass storage, peripherals, and other resources.
        For hardware functions such as input and output and memory allocation, the operating system acts as an intermediary between programs and the computer hardware,[1][2] although the application code is usually executed directly by the hardware and frequently makes system calls to an OS function or is interrupted by it. Operating systems are found on many devices that contain a computer – from cellular phones and video game consoles to web servers and supercomputers.
        In the personal computer market, as of September 2023, Microsoft Windows holds a dominant market share of around 68%. macOS by Apple Inc. is in second place (20%), and the varieties of Linux, including ChromeOS, are collectively in third place (7%).[3] In the mobile sector (including smartphones and tablets), as of September 2023, Android's share is 68.92%, followed by Apple's iOS and iPadOS with 30.42%, and other operating systems with .66%.[4] Linux distributions are dominant in the server and supercomputing sectors. Other specialized classes of operating systems (special-purpose operating systems),[5][6] such as embedded and real-time systems, exist for many applications. Security-focused operating systems also exist. Some operating systems have low system requirements (e.g. light-weight Linux distribution). Others may have higher system requirements.
        Some operating systems require installation or may come pre-installed with purchased computers (OEM-installation), whereas others may run directly from media (i.e. live CD) or flash memory (i.e. USB stick).
        
        Types of operating systems
        Single-tasking and multi-tasking
        A single-tasking system can only run one program at a time, while a multi-tasking operating system allows more than one program to be running concurrently. This is achieved by time-sharing, where the available processor time is divided between multiple processes. These processes are each interrupted repeatedly in time slices by a task-scheduling subsystem of the operating system. Multi-tasking may be characterized in preemptive and cooperative types. In preemptive multitasking, the operating system slices the CPU time and dedicates a slot to each of the programs. Unix-like operating systems, such as Linux—as well as non-Unix-like, such as AmigaOS—support preemptive multitasking. Cooperative multitasking is achieved by relying on each process to provide time to the other processes in a defined manner. 16-bit versions of Microsoft Windows used cooperative multi-tasking; 32-bit versions of both Windows NT and Win9x used preemptive multi-tasking.
        
        Single- and multi-user
        Single-user operating systems have no facilities to distinguish users but may allow multiple programs to run in tandem.[7] A multi-user operating system extends the basic concept of multi-tasking with facilities that identify processes and resources, such as disk space, belonging to multiple users, and the system permits multiple users to interact with the system at the same time. Time-sharing operating systems schedule tasks for efficient use of the system and may also include accounting software for cost allocation of processor time, mass storage, printing, and other resources to multiple users.
        
        Distributed
        A distributed operating system manages a group of distinct, networked computers and makes them appear to be a single computer, as all computations are distributed (divided amongst the constituent computers).[8]
        
        Embedded
        Embedded operating systems are designed to be used in embedded computer systems. They are designed to operate on small machines with less autonomy (e.g. PDAs). They are very compact and extremely efficient by design and are able to operate with a limited amount of resources. Windows CE and Minix 3 are some examples of embedded operating systems.
        
        Real-time
        A real-time operating system is an operating system that guarantees to process events or data by a specific moment in time. A real-time operating system may be single- or multi-tasking, but when multitasking, it uses specialized scheduling algorithms so that a deterministic nature of behavior is achieved. Such an event-driven system switches between tasks based on their priorities or external events, whereas time-sharing operating systems switch tasks based on clock interrupts.
        
        Library
        A library operating system is one in which the services that a typical operating system provides, such as networking, are provided in the form of libraries and composed with the application and configuration code to construct a unikernel: a specialized, single address space, machine image that can be deployed to cloud or embedded environments.`,
    }
]

router.route("/").get((req, res) => {
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]

    let token = req.cookies.token
    console.log(token);
    // jwt.verify(token)
    console.log(jwt.decode(token))

    console.log(token);
    res.render("index.ejs", { loggedIn: true, user: users[0], myBlogs: blogs })
})





router.route("/register").get((req, res) => {
    res.render("register.ejs", { message: null })
})

router.route("/register").post(async (req, res) => {
    try {

        console.log("[registration] ", req.body)
        let { name, gender, email, password, profileImage } = req.body

        if ([name, email, password].some(element => element.trim() === "")) {
            res.render("register.ejs", { message: "Some error occured during registering the user." })
        }

        const existedUser = await User.findOne({ email })
        if (existedUser) {
            res.render("register.ejs", { message: "User already registered" })
        }

        if (profileImage.trim() === "") {
            profileImage = "https://images.unsplash.com/photo-1595411425732-e69c1abe2763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hhcGVzfGVufDB8fDB8fHww"
        }

        const newUser = await User.create({ name, email, password, gender, profileImage })
        console.log(newUser);

        let token = jwt.sign({ userDetails: newUser }, process.env.ACCESS_SECRET, { expiresIn: "1d" })
        res.cookie("token", token, { httpOnly: true })
        res.redirect("/")

    } catch (e) {
        console.log(e);
        res.render("register.ejs", { message: "Some error occured during registering the user." })
    }
})




router.route("/login").get((req, res) => {
    res.render("login.ejs", { message: null })
})

router.route("/login").post(async (req, res) => {
    try {

        console.log(req.body)

    } catch (e) {
        console.log(e);
    }
})

router.route("/new").get((req, res) => {
    res.render("newBlog.ejs", { message: null })
})

router.route("/new").post(async (req, res) => {
    try {

        console.log(req.body);
        const { title, content } = req.body

        res.redirect("/")

    } catch (e) {
        console.log(e);
        res.render("newBlog.ejs", { message: "Some error occured during creating the blog." })
    }
})

router.route("/profile/:id").get((req, res) => {
    res.render("profile.ejs", { username: req.params.id })
})
router.route("/profile").get((req, res) => {
    res.redirect("/profile/:id")
})

router.route("/blog/:slug").get((req, res) => {
    let blog
    let slug = req.params.slug
    blog = blogs.find((element) => element.slug == slug)

    // const md = new MarkdownIt()
    // blog.content = md.render(blog.content)

    console.log(blog);
    res.render("blog.ejs", {
        blog
    })
})

export default router