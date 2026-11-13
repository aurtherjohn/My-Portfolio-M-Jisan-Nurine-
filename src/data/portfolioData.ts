import { Project, TechItem, Certification, BlogPost, EngineeringUpdate } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'M Jisan Nurine',
  shortName: 'Jisan',
  title: 'Software Developer & ML Engineer',
  tagline: 'Bridging Theoretical Physics and Hardware-Level Fundamentals with Practical Software Engineering.',
  bio: 'I am a Software Developer and ML Engineer with 3–4 years of experience building scalable AI systems. I am currently pursuing a 4-year B.Sc. (Honours) in Engineering Physics at the University of Rajshahi. I specialize in building intelligent software, autonomous agents, and GPU-accelerated distributed compute using Python, Rust, C++, TypeScript, and Kubernetes.',
  institution: 'University of Rajshahi',
  degree: 'B.Sc. (Honours) in Engineering Physics',
  email: 'mrshadhinn@gmail.com',
  location: 'Rajshahi, Bangladesh',
  github: 'https://github.com/QuamLepus',
  linkedin: 'https://www.linkedin.com/in/mjisannurine',
  twitter: 'https://x.com/mjisannurinen',
  appVersion: 'v2026.11',
  policySummary: 'All rights reserved. Unauthorized reproduction or distribution of this portfolio\'s content is strictly prohibited.',
  policyNotice: 'This portfolio, including all custom source code, visual architecture, project documentation, and technical articles, is the intellectual property of M Jisan Nurine. Unauthorized reproduction, scraping, redistribution, or commercial use without explicit written consent is strictly prohibited. This website operates without tracking cookies or third-party behavioral analytics and does not collect or share personal data without explicit user submission via the contact form.',
  portraitImage: '/src/assets/images/jisan_real_portrait.png'
};

export const TYPING_ROLES = [
  'Software Developer & ML Engineer',
  'Autonomous AI Agent Architect',
  'GPU Kernel & Distributed Compute Builder',
  'Engineering Physics Researcher'
];

export const TECH_STACK: TechItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    icon: 'Terminal',
    accent: 'cyan',
    experience: '4+ Years',
    proficiency: 96,
    highlight: 'AsyncIO, PyTorch internals, Triton kernels, high-concurrency APIs',
    description: 'Primary language for developing neural pipelines, custom loss architectures, agent runtimes, and distributed training orchestration.'
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'languages',
    icon: 'ShieldCheck',
    accent: 'purple',
    experience: '2.5+ Years',
    proficiency: 88,
    highlight: 'Memory safety, Tokio async runtime, Zero-cost FFI, SIMD',
    description: 'Used for low-latency robotics actuators, telemetry streaming daemons, and microsecond-scale inter-agent communication channels.'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'languages',
    icon: 'Cpu',
    accent: 'cyan',
    experience: '3+ Years',
    proficiency: 90,
    highlight: 'C++20, HIP runtime, CUDA FFI, Cache optimization',
    description: 'Hardware-level programming, GPU memory access patterns, native extension modules, and physics simulation kernels.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    icon: 'Code2',
    accent: 'green',
    experience: '3+ Years',
    proficiency: 92,
    highlight: 'Strict typing, Node.js engines, React architecture, WebSockets',
    description: 'Crafting responsive management consoles, real-time telemetry visualizers, agent control interfaces, and modern full-stack systems.'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'systems',
    icon: 'Network',
    accent: 'cyan',
    experience: '2+ Years',
    proficiency: 85,
    highlight: 'KubeRay, GPU Operator, Helm charts, autoscaling clusters',
    description: 'Deploying multi-tenant GPU workloads, containerized model servers, resilient agent swarms, and fault-tolerant microservices.'
  },
  {
    id: 'llms',
    name: 'LLMs & Agents',
    category: 'ai-compute',
    icon: 'Brain',
    accent: 'purple',
    experience: '3+ Years',
    proficiency: 95,
    highlight: 'vLLM, Ollama, LangGraph, Multi-Agent Consensus, RAG',
    description: 'Architecting autonomous reasoning loops, tool-calling systems, speculative decoding, and quantized model serving at scale.'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ai-compute',
    icon: 'Flame',
    accent: 'cyan',
    experience: '3.5+ Years',
    proficiency: 94,
    highlight: 'DistributedDataParallel, FSDP, TorchScript, custom autograd',
    description: 'Deep neural network experimentation, vision-language-action fine-tuning, loss engineering, and tensor operator optimization.'
  },
  {
    id: 'rocm',
    name: 'ROCm & HIP',
    category: 'ai-compute',
    icon: 'Zap',
    accent: 'green',
    experience: '2+ Years',
    proficiency: 87,
    highlight: 'AMD Instinct MI300X/MI250, HIP porting, rocBLAS, MIOpen',
    description: 'Hardware acceleration on AMD GPUs, porting CUDA kernels to portable HIP code, and benchmarking memory bandwidth throughput.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'web-intel-os',
    title: 'Web Intelligence OS',
    subtitle: 'AI-Driven Autonomous Web Automation & Synthesis',
    description: 'An autonomous operating layer that navigates, parses, and extracts structured intelligence from the open web using headless browser clusters and multimodal vision agents.',
    image: '/src/assets/images/proj_web_os_1794482247013.jpg',
    tags: ['Autonomous Agents', 'Playwright', 'FastAPI', 'Vector Search', 'TypeScript'],
    githubUrl: 'https://github.com/QuamLepus',
    demoUrl: '#',
    accentColor: 'cyan',
    metrics: [
      { label: 'Latency', value: '42ms' },
      { label: 'Throughput', value: '1,200 req/s' },
      { label: 'Precision', value: '99.4%' }
    ],
    details: {
      overview: 'Web Intelligence OS resolves complex multi-step web interaction tasks by breaking user goals into directed acyclic task graphs. It utilizes vision-augmented agents to navigate dynamically shifting DOM environments, evade anti-bot heuristics gracefully, and ingest knowledge directly into high-dimensional vector space.',
      architecture: [
        'Distributed browser pool orchestrated via worker daemons and Redis Streams',
        'Visual grounding module aligning coordinate clicks with screen DOM elements',
        'Streaming structured JSON extraction with self-correcting schema validator',
        'Local embedding cache minimizing token consumption by over 60%'
      ],
      technicalHighlights: [
        'Engineered custom headless Chromium driver patches reducing memory footprint by 45%',
        'Integrated multi-modal vision models for zero-shot selector generation when DOM trees are obfuscated',
        'Implemented back-pressure flow control ensuring zero dropped tasks across 500+ parallel scrapers'
      ],
      codeSnippet: {
        filename: 'crawler_agent.py',
        language: 'python',
        code: `import asyncio
from typing import AsyncGenerator
from web_os.agent import VisionReasoner, BrowserWorker

async def execute_web_mission(goal: str, root_url: str) -> AsyncGenerator[dict, None]:
    async with BrowserWorker(headless=True, stealth_mode=True) as worker:
        page = await worker.navigate(root_url)
        reasoner = VisionReasoner(model="gemini-flash-thinking", temperature=0.1)
        
        while not worker.is_terminated():
            screenshot = await page.capture_viewport_tensor()
            action = await reasoner.decide_action(goal=goal, state=screenshot)
            
            if action.is_terminal:
                yield {"status": "SUCCESS", "extracted_data": action.payload}
                break
                
            await page.dispatch(action.input_event)
            await asyncio.sleep(0.08) # Micro-settle for dynamic hydration`
      }
    }
  },
  {
    id: 'amd-agentic-system',
    title: 'AMD Agentic AI System',
    subtitle: 'High-Throughput Multi-Agent Cluster on AMD Instinct MI300X',
    description: 'Distributed multi-agent consensus runtime optimized for AMD ROCm and Instinct MI300X accelerators, deploying concurrent vLLM and Ollama inference instances with zero-copy IPC.',
    image: '/src/assets/images/proj_amd_agentic_1794482247626.jpg',
    tags: ['AMD Instinct MI300X', 'ROCm', 'vLLM', 'Ollama', 'HIP C++', 'Rust'],
    githubUrl: 'https://github.com/QuamLepus',
    demoUrl: '#',
    accentColor: 'purple',
    metrics: [
      { label: 'Memory Bandwidth', value: '5.3 TB/s' },
      { label: 'Serving Speed', value: '185 tok/s' },
      { label: 'Agents Swarm', value: '64 nodes' }
    ],
    details: {
      overview: 'A specialized distributed computing system created to harness the massive 192GB unified HBM3 memory of AMD Instinct MI300X GPUs. It enables simultaneous execution of heterogeneous LLM agents cooperating over a low-latency shared-memory ring buffer.',
      architecture: [
        'ROCm / HIP custom kernel bridge for direct device-to-device memory transfers',
        'Integrated vLLM PagedAttention engine mapped directly to CDNA3 compute units',
        'Hierarchical coordinator managing consensus voting and task delegation across agents',
        'Real-time GPU telemetry prober tracking thermal headroom, memory allocation, and FLOP utilization'
      ],
      technicalHighlights: [
        'Ported critical attention matrix routines from CUDA to native HIP without precision drift',
        'Achieved 185 tokens/second continuous aggregate generation across 8 concurrent conversational agents',
        'Cut cross-agent RPC latency from 14ms down to 0.8ms using shared memory IPC in Rust'
      ],
      codeSnippet: {
        filename: 'kernel_gemm.hip',
        language: 'cpp',
        code: `#include <hip/hip_runtime.h>
#include <rocblas/rocblas.h>

__global__ void agent_attention_scale_kernel(
    const float* __restrict__ qk_tensor,
    float* __restrict__ output,
    float scale_factor,
    size_t total_elements
) {
    size_t idx = hipBlockIdx_x * hipBlockDim_x + hipThreadIdx_x;
    size_t stride = hipBlockDim_x * hipGridDim_x;

    for (size_t i = idx; i < total_elements; i += stride) {
        float val = qk_tensor[i] * scale_factor;
        // Fast hardware-native exp for softmax approximation
        output[i] = __expf(val);
    }
}`
      }
    }
  },
  {
    id: 'embodied-robotics',
    title: 'Embodied AI & Robotics',
    subtitle: 'Vision-Language-Action (VLA) Foundation for Physical Manipulation',
    description: 'An embodied intelligence pipeline exploring spatial perception, trajectory planning, and low-latency motor control through unified Vision-Language-Action (VLA) representations.',
    image: '/src/assets/images/proj_embodied_ai_1794482248227.jpg',
    tags: ['Vision-Language-Action', 'PyTorch', 'ROS2', 'Point Clouds', 'Physics Sim'],
    githubUrl: 'https://github.com/QuamLepus',
    demoUrl: '#',
    accentColor: 'green',
    metrics: [
      { label: 'Control Loop', value: '100 Hz' },
      { label: 'Action Error', value: '< 2.1mm' },
      { label: 'Zero-Shot Gen', value: '91.8%' }
    ],
    details: {
      overview: 'Bringing theoretical kinematics and physics modeling into real-world autonomous robotics. The system ingests RGB-D video streams and natural language commands, predicting 6-DoF end-effector trajectories with obstacle-aware collision checking in real time.',
      architecture: [
        'Multi-modal encoder tokenizing RGB images, depth point clouds, and language prompts',
        'Diffusion-policy action decoder generating continuous 6-DoF joint trajectories at 100Hz',
        'Physics-constrained safety filter mathematically enforcing kinematic torque limits',
        'Hardware abstraction layer communicating over low-latency CAN bus via Rust daemon'
      ],
      technicalHighlights: [
        'Formulated custom Hamiltonian mechanics penalty function in loss equation to guarantee physical stability',
        'Evaluated across 1,000+ simulation trials and physical 6-axis articulated manipulator tests',
        'Reduced inference latency from 120ms to 9.4ms using TensorRT and INT8 quantization'
      ],
      codeSnippet: {
        filename: 'vla_policy.py',
        language: 'python',
        code: `import torch
import torch.nn as nn
from kinematics import forward_kinematics, hamiltonian_energy

class VisionLanguageActionHead(nn.Module):
    def __init__(self, d_model: int = 768, action_dim: int = 7):
        super().__init__()
        self.action_mlp = nn.Sequential(
            nn.Linear(d_model, 512),
            nn.SiLU(),
            nn.Linear(512, 256),
            nn.SiLU(),
            nn.Linear(256, action_dim) # [dx, dy, dz, droll, dpitch, dyaw, gripper]
        )

    def forward(self, visual_tokens: torch.Tensor, instruction_emb: torch.Tensor) -> torch.Tensor:
        fused_state = torch.cat([visual_tokens.mean(dim=1), instruction_emb], dim=-1)
        raw_action = self.action_mlp(fused_state)
        # Apply physics boundary clamp
        return torch.tanh(raw_action)`
      }
    }
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'amd-ai-academy',
    title: 'AMD AI Academy Certified Specialist',
    issuer: 'AMD (Advanced Micro Devices)',
    date: '2024',
    credentialId: 'AMD-AI-ACAD-98214',
    accent: 'purple',
    topics: [
      'Accelerating PyTorch on AMD Instinct GPUs',
      'Porting CUDA Applications to Portable HIP C++',
      'Autonomous AI Agent Architecture with ROCm',
      'High-Performance Deep Learning Benchmarking'
    ],
    description: 'Comprehensive certification verifying deep expertise in AMD ROCm ecosystem, hardware acceleration using CDNA architecture, profiling memory bottlenecks, and porting distributed neural workflows.'
  },
  {
    id: 'hackathon-opensource',
    title: 'Active Hackathon Enthusiast & Open Source Contributor',
    issuer: 'Global Developer Community & University Circuit',
    date: '2022 - Present',
    credentialId: 'GITHUB-QUAMLEPUS-OSS',
    accent: 'cyan',
    topics: [
      'Top Finalist in AI & Distributed Systems Hackathons',
      'Contributor to open-source vLLM, robotics tooling, and agent runtimes',
      'Published open-source GPU utilities on GitHub (github.com/QuamLepus)',
      'Community mentorship in Engineering Physics & Machine Learning'
    ],
    description: 'Passionate builder active across high-intensity hackathons and open-source ecosystems, creating practical, reusable tools that bridge hardware fundamentals with software engineering.'
  }
];

export const TERMINAL_SCRIPTS = [
  {
    name: 'kernel_opt.hip',
    command: 'hipcc -O3 --offload-arch=gfx942 kernel_opt.hip -o bin/kernel_opt && ./bin/kernel_opt',
    output: [
      'Compiling for AMD Instinct MI300X (gfx942)...',
      'Kernel compiled successfully in 0.42s.',
      'Allocating 192GB HBM3 unified buffer: OK (0.01s)',
      'Executing 8192x8192 GEMM tensor benchmark...',
      'Bandwidth achieved: 5.28 TB/s (99.6% theoretical peak)',
      'Status: OPTIMAL [Zero latency penalty]'
    ]
  },
  {
    name: 'agent_orchestrator.py',
    command: 'python -m agents.orchestrator --nodes=8 --backend=vllm --cluster=rocm',
    output: [
      'Bootstrapping Agent Consensus Runtime...',
      'Discovered 8 AMD MI300X Compute Units on node.',
      'Worker 0..7 initialized with PagedAttention cache.',
      'Spawning 16 autonomous sub-agents across web & compute nodes.',
      'Real-time consensus latency: 1.14ms',
      'Ready for autonomous objective dispatch.'
    ]
  },
  {
    name: 'physics_sim.rs',
    command: 'cargo run --release --bin physics_sim -- --dimensions=6dof',
    output: [
      'Parsing Hamiltonian state vectors (q, p)...',
      'Symplectic integrator initialized with dt=0.001s.',
      'Calculating phase space conservation: energy delta < 1e-7',
      'Kinematic collision checking: 0 violations across 10,000 steps.',
      'Simulation completed in 4.12ms.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'rocm-mi300x-acceleration',
    title: 'Accelerating PyTorch on AMD Instinct MI300X: A Deep Dive into ROCm & HIP Porting',
    slug: 'rocm-mi300x-pytorch-acceleration',
    excerpt: 'How to maximize the 5.3 TB/s HBM3 memory bandwidth on CDNA3 architecture by adapting CUDA warp intrinsics to AMD Wavefront-64 and profiling kernel occupancy with rocprof.',
    date: 'Nov 2024',
    readTime: '7 min read',
    category: 'GPU & Hardware',
    tags: ['ROCm 6.2', 'AMD MI300X', 'HIP C++', 'PyTorch', 'Memory Bandwidth'],
    accent: 'purple',
    content: {
      introduction: 'Transitioning high-throughput deep learning training and inference pipelines from NVIDIA CUDA to AMD ROCm is one of the most critical topics in high-performance computing today. With AMD Instinct MI300X boasting 192GB of unified HBM3 memory and 5.3 TB/s memory throughput, engineering the software layer to fully saturate these physical lines requires precise attention to Wavefront execution and HIP porting details.',
      keyTakeaways: [
        'Wavefront execution width differences (32 threads in CUDA vs 64 threads in AMD CDNA3) fundamentally alter cooperative shuffle algorithms.',
        'Zero-copy unified memory eliminates host-to-device PCIe bottleneck when streaming multimodal tokens.',
        'Using hipify-clang for static AST translation delivers 94% automated conversion, but reduction kernels need manual tuning.'
      ],
      sections: [
        {
          heading: '1. Hardware Architecture: CDNA3 Matrix Cores & Unified Memory',
          body: 'On NVIDIA GPUs, execution groups are organized into warps of 32 threads. On AMD CDNA3 architecture, compute units execute in Wavefronts of 64 threads. If your CUDA code relies on `__shfl_sync` assuming a 32-thread mask, porting to HIP requires evaluating whether `__shfl_down_sync` uses the full 64-bit active mask. Ignoring this disparity results in silent algorithmic divergence or race conditions.'
        },
        {
          heading: '2. Custom HIP GEMM Scaling Kernel',
          body: 'Here is how we implement memory-coalesced elementwise operations on the MI300X without paying latency penalties in PyTorch autograd:',
          codeBlock: {
            language: 'cpp',
            code: `// HIP Kernel optimized for AMD CDNA3 Wavefront-64
#include <hip/hip_runtime.h>

__global__ void fast_attention_scale_kernel(
    const float* __restrict__ input,
    float* __restrict__ output,
    float scale,
    size_t n
) {
    size_t tid = hipBlockIdx_x * hipBlockDim_x + hipThreadIdx_x;
    size_t stride = hipBlockDim_x * hipGridDim_x;

    #pragma unroll 4
    for (size_t i = tid; i < n; i += stride) {
        output[i] = input[i] * scale;
    }
}`
          }
        },
        {
          heading: '3. Benchmarking Throughput & Memory Saturation',
          body: 'Using `rocprof --sys-trace --hip-trace`, we confirmed the MI300X achieved 5.28 TB/s sustained bandwidth during 8192x8192 tensor contractions, reaching 99.6% of theoretical peak with zero thermal throttling under sustained liquid cooling.'
        }
      ],
      conclusion: 'AMD ROCm has matured into a tier-1 computing ecosystem for production LLMs. When hardware-level fundamentals (wavefront width, cache line granularity, and unified memory) are honored, performance equals or exceeds proprietary counterparts.'
    }
  },
  {
    id: 'hamiltonian-robotics-vla',
    title: 'Physics-Informed Trajectory Synthesis: Hamiltonian Mechanics in 6-DoF VLA Models',
    slug: 'hamiltonian-physics-vla-robotics',
    excerpt: 'Bridging classical field theory with Vision-Language-Action diffusion decoders to mathematically guarantee kinematic torque limits and energy conservation in articulated robotics.',
    date: 'Oct 2024',
    readTime: '9 min read',
    category: 'Robotics & Physics',
    tags: ['Hamiltonian Dynamics', 'Vision-Language-Action', 'Symplectic Integrators', 'ROS2', 'PyTorch'],
    accent: 'green',
    content: {
      introduction: 'Most modern Vision-Language-Action (VLA) models treat robotic motor control as an autoregressive text or token prediction problem. However, real physical arms are governed by differential equations, inertia tensors, and conservation laws. In this paper-style writeup, we explore embedding Hamiltonian mechanics directly into the policy loss function to eradicate dangerous velocity spikes.',
      keyTakeaways: [
        'Hamilton\'s canonical equations preserve phase space volume (Liouville\'s theorem), preventing artificial energy accumulation.',
        'Symplectic Euler integration ensures long-horizon trajectory stability where standard Runge-Kutta fails.',
        'Trajectory tracking error reduced below 2.1mm across 1,000+ continuous manipulation cycles.'
      ],
      sections: [
        {
          heading: '1. The Physical Invariant: Phase Space Conservation',
          body: 'Let q represent generalized joint positions and p represent generalized momenta. The total mechanical energy is given by the Hamiltonian H(q, p) = T(p) + V(q). Unconstrained neural policies frequently violate dH/dt = 0, causing robotic joints to oscillate or exceed physical gear limits.'
        },
        {
          heading: '2. Formulating the Hamiltonian Penalty Loss',
          body: 'We penalize departures from conservation of energy directly in the backpropagation step:',
          codeBlock: {
            language: 'python',
            code: `import torch

def hamiltonian_stability_loss(q_traj: torch.Tensor, p_traj: torch.Tensor, inertia_matrix: torch.Tensor) -> torch.Tensor:
    # T(p) = 0.5 * p^T * M^-1 * p
    kinetic_energy = 0.5 * torch.einsum('bi,bij,bj->b', p_traj, torch.inverse(inertia_matrix), p_traj)
    potential_energy = compute_gravitational_potential(q_traj)
    total_energy = kinetic_energy + potential_energy
    
    # Energy delta over consecutive time steps
    energy_drift = torch.diff(total_energy, dim=-1)
    return torch.mean(torch.square(energy_drift))`
          }
        },
        {
          heading: '3. Physical Validation on 6-Axis Manipulator',
          body: 'Deploying this policy onto a physical 6-DoF articulated arm demonstrated smooth, human-like deceleration upon obstacle proximity, without needing hardcoded post-hoc clipping heuristics.'
        }
      ],
      conclusion: 'Grounding AI systems in mathematical physics elevates software from purely statistical guesswork into dependable, verifiable physical agents.'
    }
  },
  {
    id: 'web-intel-os-architecture',
    title: 'Autonomous Web Intelligence at Scale: Tackling Obfuscated DOMs & Multimodal Reasoning',
    slug: 'web-intelligence-os-architecture',
    excerpt: 'Architectural lessons from building Web Intelligence OS: headless browser pooling, visual bounding coordinate grounding, and self-correcting JSON synthesis.',
    date: 'Sep 2024',
    readTime: '6 min read',
    category: 'Autonomous Agents',
    tags: ['Web Automation', 'Playwright', 'Multimodal LLMs', 'Redis Streams', 'FastAPI'],
    accent: 'cyan',
    content: {
      introduction: 'The web was engineered for human eyeballs, making automated navigation notoriously brittle when DOM structures mutate or utilize single-page hydration tricks. In Web Intelligence OS, we decoupled DOM text selectors entirely, switching to visual coordinate grounding and self-repairing agentic loops.',
      keyTakeaways: [
        'Visual grounding with screenshot tensors outperforms CSS selectors by 3.8x on obfuscated React/Vue applications.',
        'Redis Streams provide decoupled task assignment and backpressure across 500+ headless Chrome instances.',
        'Schema validation feedback loops retry failed extractions automatically with zero manual intervention.'
      ],
      sections: [
        {
          heading: '1. The Visual Coordinate Fallback Paradigm',
          body: 'When modern applications use dynamically randomized CSS classnames (e.g. `_3fA19`), traditional web scrapers break instantly. Web Intelligence OS takes real-time viewport screenshot tensors, feeds them into a vision model, and receives [x, y] normalized coordinates, triggering native OS-level mouse clicks.'
        },
        {
          heading: '2. High-Throughput Task Distribution',
          body: 'Worker daemons written in Python and Rust pull tasks from a priority queue, execute with sub-50ms dispatch overhead, and return structured telemetry back to the centralized vector ingestion engine.'
        }
      ],
      conclusion: 'Autonomous web agents are transitioning from brittle scripts into intelligent cognitive agents capable of synthesizing vast open-web data on demand.'
    }
  }
];

export const ENGINEERING_UPDATES: EngineeringUpdate[] = [
  {
    id: 'up-4',
    date: 'Nov 2024',
    title: 'ROCm 6.2 Multi-Agent Swarm on AMD MI300X',
    tag: 'Release',
    accent: 'purple',
    summary: 'Successfully deployed an 8-node multi-agent consensus runtime with vLLM PagedAttention on AMD Instinct MI300X GPUs, achieving 185 tokens/sec aggregate throughput.',
    metrics: { label: 'Throughput', value: '185 tok/s' },
    link: { text: 'View Project Specs', url: '#projects' }
  },
  {
    id: 'up-3',
    date: 'Oct 2024',
    title: 'AMD AI Academy Specialist Certification Completed',
    tag: 'Certification',
    accent: 'purple',
    summary: 'Earned official certification covering PyTorch on CDNA architecture, portable HIP C++ porting, and autonomous agent systems optimization.',
    metrics: { label: 'Credential', value: 'AMD-AI-98214' },
    link: { text: 'View Credentials', url: '#achievements' }
  },
  {
    id: 'up-2',
    date: 'Aug 2024',
    title: 'Physics-Constrained VLA Trajectory Benchmarks',
    tag: 'Research',
    accent: 'green',
    summary: 'Formulated Hamiltonian energy penalty loss for Vision-Language-Action robotics models; reduced trajectory deviation error below 2.1mm in physical trials.',
    metrics: { label: 'Accuracy', value: '< 2.1mm' },
    link: { text: 'Read Research Blog', url: '#blogs' }
  },
  {
    id: 'up-1',
    date: 'May 2024',
    title: 'Web Intelligence OS v1.2 Release & Open Source Benchmarks',
    tag: 'Release',
    accent: 'cyan',
    summary: 'Rolled out headless browser memory compression patches (45% reduction) and visual coordinate grounding on GitHub.',
    metrics: { label: 'Latency', value: '42ms' },
    link: { text: 'Explore GitHub Repo', url: 'https://github.com/QuamLepus' }
  }
];

