const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer, 
        AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType, PageNumber, LevelFormat } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 48, bold: true, color: "1a365d", font: "Arial" },
        paragraph: { spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "2c5282", font: "Arial" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "2d3748", font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "4a5568", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-goals",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-personas",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-success",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-constraints",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-risks",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({ 
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "ApertureAI PRD", italics: true, color: "718096", size: 20 })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ 
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", size: 20 }), new TextRun({ children: [PageNumber.CURRENT], size: 20 }), new TextRun({ text: " of ", size: 20 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 20 })]
      })] })
    },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("ApertureAI")] }),
      new Paragraph({ 
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [new TextRun({ text: "Product Requirements Document", size: 28, color: "4a5568" })]
      }),
      
      // Document Info Table
      new Table({
        columnWidths: [2340, 7020],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "edf2f7", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Version", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 7020, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("1.0")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "edf2f7", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Date", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 7020, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("November 2025")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "edf2f7", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Status", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 7020, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Draft")] })] })
          ]})
        ]
      }),

      // Executive Summary
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("ApertureAI is a Flutter-based desktop application that enables users to design, build, and execute agentic AI workflows through an intuitive visual interface. Similar to n8n's approach to workflow automation, ApertureAI focuses specifically on orchestrating AI agents to complete complex, multi-step tasks autonomously. The application empowers both technical and non-technical users to harness the power of AI agents without writing code.")
      ]}),

      // Problem Statement
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Problem Statement")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Current AI tools often require users to manually orchestrate multiple steps, manage context between operations, and handle error recovery themselves. Existing workflow automation tools like n8n, Zapier, and Make excel at traditional automation but lack native support for agentic AI behaviors such as autonomous decision-making, dynamic tool selection, and self-correction. Users need a purpose-built solution that combines visual workflow design with true AI agent capabilities.")
      ]}),

      // Vision & Goals
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Vision & Goals")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Product Vision")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("To become the leading desktop platform for building and deploying agentic AI workflows, making autonomous AI assistants accessible to everyone while providing the power and flexibility that advanced users demand.")
      ]}),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Primary Goals")] }),
      new Paragraph({ numbering: { reference: "numbered-goals", level: 0 }, children: [new TextRun({ text: "Democratize Agentic AI: ", bold: true }), new TextRun("Enable non-developers to create sophisticated AI workflows through visual, drag-and-drop design.")] }),
      new Paragraph({ numbering: { reference: "numbered-goals", level: 0 }, children: [new TextRun({ text: "Maximize Flexibility: ", bold: true }), new TextRun("Support multiple AI providers (OpenAI, Anthropic, local models) and integration with hundreds of external services.")] }),
      new Paragraph({ numbering: { reference: "numbered-goals", level: 0 }, children: [new TextRun({ text: "Ensure Reliability: ", bold: true }), new TextRun("Provide robust error handling, automatic retries, and human-in-the-loop checkpoints for critical operations.")] }),
      new Paragraph({ numbering: { reference: "numbered-goals", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Maintain Privacy: ", bold: true }), new TextRun("As a desktop application, keep sensitive data and workflows local while offering optional cloud sync.")] }),

      // Target Users
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Target Users")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Primary Personas")] }),
      new Paragraph({ numbering: { reference: "numbered-personas", level: 0 }, children: [new TextRun({ text: "Knowledge Workers: ", bold: true }), new TextRun("Professionals who want to automate research, content creation, data analysis, and administrative tasks using AI agents.")] }),
      new Paragraph({ numbering: { reference: "numbered-personas", level: 0 }, children: [new TextRun({ text: "Developers & Technical Users: ", bold: true }), new TextRun("Engineers who need to prototype AI agent systems quickly or integrate agentic workflows into larger applications.")] }),
      new Paragraph({ numbering: { reference: "numbered-personas", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Small Business Owners: ", bold: true }), new TextRun("Entrepreneurs seeking to leverage AI for customer service, lead generation, and business process automation without hiring specialized staff.")] }),

      // Core Features
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Core Features")] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("1. Visual Workflow Canvas")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("A node-based visual editor for designing agentic workflows:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Drag-and-drop interface with zoom, pan, and minimap navigation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Real-time visual feedback showing workflow execution state")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Branching, looping, and conditional logic support")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Subflow/macro support for reusable workflow components")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2. Agent Node Types")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("Purpose-built nodes for agentic behaviors:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "LLM Nodes: ", bold: true }), new TextRun("Configure prompts, model parameters, and context windows for various AI providers")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Tool Nodes: ", bold: true }), new TextRun("Web browsing, file operations, API calls, code execution, and database queries")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Memory Nodes: ", bold: true }), new TextRun("Short-term and long-term memory management with vector database integration")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Decision Nodes: ", bold: true }), new TextRun("AI-powered routing based on context and goals")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Human-in-the-Loop Nodes: ", bold: true }), new TextRun("Approval gates, feedback collection, and manual intervention points")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3. Integration Hub")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("Extensive connectivity options:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "AI Providers: ", bold: true }), new TextRun("OpenAI, Anthropic, Google, Mistral, Ollama, and custom endpoints")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Productivity Apps: ", bold: true }), new TextRun("Google Workspace, Microsoft 365, Notion, Slack, Discord")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Data Sources: ", bold: true }), new TextRun("SQL databases, REST/GraphQL APIs, file systems, cloud storage")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Custom Integrations: ", bold: true }), new TextRun("Plugin SDK for building custom nodes and connectors")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4. Execution Engine")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("Robust workflow execution capabilities:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Real-time execution monitoring with step-by-step visualization")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Automatic error recovery with configurable retry policies")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Parallel execution support for independent workflow branches")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Scheduled and trigger-based workflow activation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Execution history and audit logging")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5. Agent Intelligence Features")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("Advanced agentic capabilities:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Dynamic Tool Selection: ", bold: true }), new TextRun("Agents can choose from available tools based on task requirements")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Goal Decomposition: ", bold: true }), new TextRun("Automatic breakdown of complex goals into actionable subtasks")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Self-Reflection: ", bold: true }), new TextRun("Agents evaluate their outputs and iterate to improve results")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Context Management: ", bold: true }), new TextRun("Intelligent summarization and retrieval of relevant context across long workflows")] }),

      // Technical Architecture
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Technical Architecture")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Platform & Stack")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Framework: ", bold: true }), new TextRun("Flutter 3.x for cross-platform desktop (Windows, macOS, Linux)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "State Management: ", bold: true }), new TextRun("Riverpod or Bloc for reactive state handling")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Local Storage: ", bold: true }), new TextRun("SQLite for workflow persistence, Hive for settings and cache")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Vector Store: ", bold: true }), new TextRun("Embedded vector database (e.g., ObjectBox with vector extension) for agent memory")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Execution Runtime: ", bold: true }), new TextRun("Dart isolates for parallel workflow execution")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Key Components")] }),
      new Table({
        columnWidths: [3120, 6240],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "edf2f7", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Component", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6240, type: WidthType.DXA }, shading: { fill: "edf2f7", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Responsibility", bold: true })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Workflow Editor")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6240, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Visual canvas, node library, connection management")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Execution Engine")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6240, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Workflow parsing, scheduling, execution coordination")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Agent Runtime")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6240, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("LLM communication, tool invocation, memory management")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Integration Layer")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6240, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("API clients, authentication, rate limiting")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Data Layer")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6240, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Workflow storage, execution logs, vector memory")] })] })
          ]})
        ]
      }),

      // Release Phases
      new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 400 }, children: [new TextRun("Release Phases")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Phase 1: Foundation (MVP)")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Timeline: ", bold: true }), new TextRun("3-4 months")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Core visual workflow editor with basic node types")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("OpenAI and Anthropic integration")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Basic tool nodes (HTTP requests, file operations)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Simple sequential workflow execution")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Local workflow storage")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Phase 2: Intelligence")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Timeline: ", bold: true }), new TextRun("2-3 months")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Agent memory system with vector storage")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Dynamic tool selection capabilities")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Branching and conditional logic")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Human-in-the-loop approval nodes")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Execution monitoring dashboard")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Phase 3: Expansion")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Timeline: ", bold: true }), new TextRun("3-4 months")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Expanded integration library (50+ connectors)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Local LLM support (Ollama, LM Studio)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Subflows and reusable templates")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Scheduled and trigger-based execution")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Community template marketplace")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Phase 4: Scale")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Timeline: ", bold: true }), new TextRun("2-3 months")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Plugin SDK for custom node development")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Optional cloud sync and team collaboration")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Advanced debugging and testing tools")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Performance optimization and parallel execution")] }),

      // Success Metrics
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Success Metrics")] }),
      new Paragraph({ numbering: { reference: "numbered-success", level: 0 }, children: [new TextRun({ text: "User Adoption: ", bold: true }), new TextRun("10,000 downloads within 6 months of public launch")] }),
      new Paragraph({ numbering: { reference: "numbered-success", level: 0 }, children: [new TextRun({ text: "Engagement: ", bold: true }), new TextRun("Average of 5+ workflows created per active user")] }),
      new Paragraph({ numbering: { reference: "numbered-success", level: 0 }, children: [new TextRun({ text: "Retention: ", bold: true }), new TextRun("40% monthly active user retention rate")] }),
      new Paragraph({ numbering: { reference: "numbered-success", level: 0 }, children: [new TextRun({ text: "Reliability: ", bold: true }), new TextRun("99.5% successful workflow execution rate")] }),
      new Paragraph({ numbering: { reference: "numbered-success", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Community: ", bold: true }), new TextRun("500+ shared workflow templates within first year")] }),

      // Constraints & Considerations
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Constraints & Considerations")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Technical Constraints")] }),
      new Paragraph({ numbering: { reference: "numbered-constraints", level: 0 }, children: [new TextRun("Flutter desktop is less mature than mobile; some platform-specific workarounds may be needed")] }),
      new Paragraph({ numbering: { reference: "numbered-constraints", level: 0 }, children: [new TextRun("Local-first architecture limits real-time collaboration features initially")] }),
      new Paragraph({ numbering: { reference: "numbered-constraints", level: 0 }, spacing: { after: 200 }, children: [new TextRun("API rate limits from AI providers may affect heavy workflow execution")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Risks & Mitigations")] }),
      new Paragraph({ numbering: { reference: "numbered-risks", level: 0 }, children: [new TextRun({ text: "AI Provider Dependency: ", bold: true }), new TextRun("Mitigate by supporting multiple providers and local models")] }),
      new Paragraph({ numbering: { reference: "numbered-risks", level: 0 }, children: [new TextRun({ text: "Complexity Barrier: ", bold: true }), new TextRun("Address with extensive templates, tutorials, and progressive disclosure of advanced features")] }),
      new Paragraph({ numbering: { reference: "numbered-risks", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Security Concerns: ", bold: true }), new TextRun("Implement secure credential storage, sandboxed code execution, and clear data handling policies")] }),

      // Conclusion
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Conclusion")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("ApertureAI represents an opportunity to bridge the gap between powerful AI agent capabilities and accessible workflow automation. By leveraging Flutter's cross-platform strengths and focusing on a local-first, privacy-respecting architecture, ApertureAI can carve out a unique position in the growing AI tools market. The phased approach allows for iterative development and user feedback integration while building toward a comprehensive agentic workflow platform.")
      ]})
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("./ApertureAI_PRD.docx", buffer);
  console.log("PRD created successfully!");
});
