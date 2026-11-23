import type { Note } from "./note-data";

export const securityStudyNotes: Note[] = [
  {
    slug: "adversarial-robustness-as-constrained-optimization",
    title: "Adversarial robustness starts with the constraint",
    summary: "Reading notes on perturbation budgets, projected optimization and the evidence needed for a robustness claim.",
    topic: "Adversarial machine learning",
    readingTime: "2 min read",
    kind: "Reading note",
    provenance: "Adapted from my handwritten study notes on adversarial robustness.",
    sections: [
      {
        heading: "Define what can change",
        paragraphs: [
          "An adversarial example can be studied as a constrained optimization problem: search for an input change that increases a model’s loss while staying inside an allowed perturbation set. The constraint describes the changes included in the question. A statement about robustness needs to keep that set, the input representation and the attacker’s access explicit.",
          "My notes begin with small changes to image pixels. That is one concrete setting; it does not by itself define which changes should preserve meaning in every application.",
        ],
      },
      {
        heading: "Keep the constraint in the loop",
        paragraphs: [
          "Projected gradient methods alternate an optimization step with a projection back into the allowed set. The two operations play different roles: one searches for higher loss, while the other enforces the perturbation budget. Madry and colleagues develop this view through robust optimization and adversarial training.",
          "The handwritten derivation is a useful way to connect the objective, the update and the constraint before considering a particular model or benchmark.",
        ],
      },
      {
        heading: "Ask what a failed attack establishes",
        paragraphs: [
          "Athalye, Carlini and Wagner show how obfuscated gradients can make optimization-based attacks fail while the evaluated defenses remain vulnerable. Their work is a reason to distinguish difficulty obtaining a useful gradient from demonstrated robustness. Randomness or nondifferentiable preprocessing therefore needs an evaluation that accounts for that behavior.",
          "This sharpens a question from my notes: does the evaluation test the defended model under the stated assumptions, or mainly reveal a limitation of the chosen search method?",
        ],
      },
      {
        heading: "Questions to carry into an experiment",
        paragraphs: [
          "Which input changes are relevant to the application? What can the evaluator observe or query? How does the conclusion change when the search adapts to the defense? These remain open evaluation questions in my notes, alongside the broader interest in more robust vision models. The notes contain no model-specific robustness measurements.",
        ],
      },
    ],
    sources: [
      {
        label: "Madry et al. — Towards Deep Learning Models Resistant to Adversarial Attacks",
        href: "https://arxiv.org/abs/1706.06083",
        external: true,
      },
      {
        label: "Athalye et al. — Obfuscated Gradients Give a False Sense of Security",
        href: "https://arxiv.org/abs/1802.00420",
        external: true,
      },
    ],
  },
  {
    slug: "threshold-secret-sharing",
    title: "A secret at the origin of a polynomial",
    summary: "Reading notes on Shamir secret sharing: why enough shares reconstruct a secret, and what the threshold means.",
    topic: "Cryptography",
    readingTime: "2 min read",
    kind: "Reading note",
    provenance: "Adapted from my handwritten study notes on threshold secret sharing.",
    sections: [
      {
        heading: "Put the secret in the constant term",
        paragraphs: [
          "My notes study Shamir’s threshold secret-sharing construction. Work over the finite field of integers modulo a prime p, with a secret represented by a field element. For a threshold t, choose the other coefficients independently and uniformly to form a polynomial of degree at most t − 1. Its constant term is the secret.",
          "Give each participant a share consisting of a distinct, nonzero field input and the polynomial’s value there. The field must provide enough such inputs for the participants.",
        ],
      },
      {
        heading: "Recover the value at zero",
        paragraphs: [
          "Any t valid shares determine the polynomial through interpolation. Evaluating that polynomial at zero recovers the constant term and therefore the secret. This is the reconstruction step sketched in my notes: points determine a polynomial, and one particular evaluation gives back the value being protected.",
        ],
      },
      {
        heading: "Separate reconstruction from privacy",
        paragraphs: [
          "With the stated random-coefficient construction, fewer than t shares reveal no information about the secret. Shamir’s paper explains this through the equally likely polynomials compatible with the observed shares and each possible secret. The randomness and finite-field assumptions belong to that statement.",
          "The handwritten curve helps visualize reconstruction, but the privacy claim rests on the field construction. A drawing through ordinary real-valued points is only an intuition for part of the argument.",
        ],
      },
      {
        heading: "Keep the next questions visible",
        paragraphs: [
          "My page ends with interpolation equations rather than a complete protocol or implementation. How should a system handle missing or incorrect shares? What assumptions are needed when participants interact? Those are useful next questions for studying secure multiparty computation. This note covers sharing and reconstruction; it does not specify how participants jointly evaluate an arbitrary function on private inputs.",
        ],
      },
    ],
    sources: [
      {
        label: "Adi Shamir — How to Share a Secret",
        href: "https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf",
        external: true,
      },
    ],
  },
];
