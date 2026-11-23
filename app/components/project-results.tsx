import Link from "next/link";
import Image from "next/image";
import type { Project } from "../projects/project-data";
import fastgatrBenchmark from "../../public/images/projects/fastgatr-benchmark.png";

const depthResults = [
  { label: "ResNet-18 baseline", mean: 0.572, variation: "0.011", baseline: true },
  { label: "Complete model", mean: 0.537, variation: "0.004", baseline: false },
];

const operationCounts = [
  { label: "EquiLinear", dense: 2304, nonzero: 24 },
  { label: "Geometric product", dense: 4096, nonzero: 192 },
  { label: "Equivariant join", dense: 4096, nonzero: 81 },
];

export function ProjectResults({ kind }: { kind: Project["visual"] }) {
  if (kind === "depth") {
    return (
      <figure className="result-figure">
        <figcaption>
          <p className="section-label">From the experiments</p>
          <h3>Depth error, with the variation visible.</h3>
          <p className="muted">Test SILog-RMSE across five seeds. Lower is better.</p>
        </figcaption>
        <table className="result-table depth-results">
          <caption className="sr-only">Mean test SILog-RMSE and reported variation across five random seeds.</caption>
          <thead><tr><th scope="col">Configuration</th><th scope="col">Test error</th></tr></thead>
          <tbody>{depthResults.map(result => (
            <tr key={result.label}>
              <th scope="row">{result.label}</th>
              <td>
                <div className="result-value">{result.mean.toFixed(3)} <span>± {result.variation}</span></div>
                <div className="result-track" aria-hidden="true"><span className={result.baseline ? "result-bar is-baseline" : "result-bar"} style={{ width: `${result.mean / 0.6 * 100}%` }} /></div>
              </td>
            </tr>
          ))}</tbody>
        </table>
        <p className="result-scale" aria-hidden="true"><span>Bar scale: 0</span><span>0.6</span></p>
        <p className="result-context muted">This compares the baseline and complete configurations. The component ablations in the report explain which additions contributed to the result.</p>
        <Link className="text-link" href="/PDFs/CIL_monodepth_estimation.pdf">Source: research report, Table 1</Link>
      </figure>
    );
  }

  if (kind === "performance") {
    return (
      <figure className="result-figure">
        <figcaption>
          <p className="section-label">From the benchmarks</p>
          <h3>The full implementation, measured.</h3>
          <p className="muted">Original report figure. The triangle-marked series compares SIMD C++ with the optimized PyTorch reference; the vertical axis uses a logarithmic scale.</p>
        </figcaption>
        <Image className="benchmark-image" src={fastgatrBenchmark} alt="Original benchmark plot: SIMD C++ is 1.7–4.5 times faster than EzGATr across the tested Apple M1 configurations. A separate series compares with the straightforward C++ baseline and ends at input size 32." sizes="(max-width: 680px) 90vw, 720px" />
        <a className="text-link" href="/images/projects/fastgatr-benchmark.png" target="_blank" rel="noopener noreferrer">Open full-size benchmark<span className="sr-only"> (opens in a new tab)</span></a>
        <p className="result-context muted">Single-core Apple M1. Batch size 8; layers and channels scale with N, and tokens with 2N. Each configuration uses 10 warm-up runs and a mean over 30 timed repeats.</p>
        <details className="result-breakdown">
          <summary>How sparse specialization reduces the work</summary>
          <p className="muted">Fixed tensor terms before and after specialization:</p>
          <table className="result-table structure-results">
            <caption className="sr-only">Dense tensor terms and nonzero terms evaluated by three specialized operations.</caption>
            <thead><tr><th scope="col">Operation</th><th scope="col">Dense</th><th scope="col">Nonzero</th></tr></thead>
            <tbody>{operationCounts.map(operation => (
              <tr key={operation.label}>
                <th scope="row">{operation.label}</th>
                <td>{operation.dense.toLocaleString("en-US")}</td>
                <td>{operation.nonzero.toLocaleString("en-US")}</td>
              </tr>
            ))}</tbody>
          </table>
          <p className="result-context muted">These are counts of algebraic terms. The benchmark above measures end-to-end runtime.</p>
        </details>
        <Link className="text-link" href="/PDFs/asl_report.pdf#page=6">Source: technical report, Figure 11</Link>
      </figure>
    );
  }

  return null;
}
