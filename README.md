# Nathalia Mainenti — Portfólio de Data Science

Portfólio com 8 projetos de ponta a ponta (regressão, classificação binária e multiclasse,
clusterização e detecção de anomalias), um site próprio e um blog técnico com posts sobre
conceitos usados nos projetos.

🔗 [GitHub](https://github.com/NathaliaMainenti) · [LinkedIn](https://www.linkedin.com/in/nathalia-mainenti-/)

## Projetos

| # | Projeto | Problema de negócio | Técnica | Resultado principal |
|---|---|---|---|---|
| 01 | [Titanic — Classificação](01-titanic-classificacao/titanic_analise.ipynb) | Prever sobrevivência de passageiros | Regressão Logística, KNN, SVM, Árvore de Decisão | Sexo foi a variável mais forte (74,2% x 18,9% de sobrevivência); comparação lado a lado de 4 algoritmos |
| 02 | [Risco de Crédito](02-risco-credito/risco_credito_analise.ipynb) | Prever inadimplência séria em 2 anos | Regressão Logística | Ajuste de limiar (0,5 → 0,15) triplicou o recall (16% → 50%) às custas de precisão |
| 03 | [Clusterização Iris](03-clusters-iris/iris_analise.ipynb) | Agrupar flores por medidas sem informar a espécie | K-Means, Agglomerative Clustering | 83,3% de acerto (K-Means) e 82,7% (Agglomerative) contra o rótulo real, nunca visto pelo modelo |
| 04 | [Precificação Dinâmica (Uber/99)](04-precificacao-dinamica-uber/dynamic_pricing_analise.ipynb) | Estimar o preço por minuto de uma corrida a partir do contexto de oferta/demanda | Regressão (OLS, XGBoost) | R² baixo (12–19%); investigação mostrou que quase todo o poder explicativo vinha do tipo de veículo, não de oferta/demanda |
| 05 | [Elasticidade — Online Retail II](05-elasticidade-online-retail/elasticidade_analise.ipynb) | Estimar elasticidade-preço da demanda em e-commerce real | Regressão log-log (OLS) | 60,8% dos produtos com elasticidade significativa (p<0,05), mediana de -1,94 (demanda elástica) |
| 06 | [Detecção de Fraude](06-deteccao-fraude/fraude_analise.ipynb) | Identificar transações fraudulentas em base extremamente desbalanceada (0,17% de fraude) | XGBoost + SMOTE, ajuste de limiar | Ajuste de limiar (0,5 → 0,85) subiu a precisão de 59,7% para 82,2% mantendo recall de 77,9% (F1 0,688 → 0,800) |
| 07 | [Qualidade do Vinho](07-qualidade-vinho/qualidade_vinho_analise.ipynb) | Classificar qualidade (baixa/média/alta) por propriedades físico-químicas | Regressão Logística, Random Forest, XGBoost | 82,4% de acurácia e F1-macro 0,518; teste de generalização entre vinho tinto e branco |
| 08 | [Previsão de Prêmio de Seguro](08-previsao-premio-seguro/premio_seguro_analise.ipynb) | Prever o prêmio escrito por agência/produto/estado/ano a partir do book de performance | Regressão (OLS, XGBoost) | R²=0,984 (XGBoost) no prêmio total, mas diagnóstico mostrou que boa parte é estrutural; reformulando como prêmio médio por apólice (removendo a quase-tautologia), o R² honesto cai pra 0,750 — mais baixo, porém defensável |

Cada notebook segue a mesma estrutura: objetivo de negócio → EDA → modelagem → avaliação →
conclusões em linguagem de negócio (a última seção de cada um resume o resultado para quem não
vai ler o notebook inteiro).

## Blog técnico

Posts curtos sobre os conceitos estatísticos e de ML usados nos projetos acima:

- [Precisão, Recall, F1 e Acurácia](blog/precisao-recall-f1-acuracia.html)
- [AUC-PR e Detecção de Fraude](blog/auc-pr-deteccao-fraude.html)
- [R², Curva ROC e Índice de Gini](blog/r2-roc-gini.html)
- [Overfitting e Underfitting](blog/overfitting-underfitting.html)
- [Quando Padronizar os Dados](blog/padronizacao-dados-quando-importa.html)
- [Cotovelo, Silhueta e Dendrograma](blog/cotovelo-silhueta-dendrograma.html)

## Stack

Python · pandas · NumPy · scikit-learn · XGBoost · imbalanced-learn (SMOTE) · statsmodels ·
matplotlib · seaborn · Jupyter

## Estrutura

```
.
├── 01-titanic-classificacao/
├── 02-risco-credito/
├── 03-clusters-iris/
├── 04-precificacao-dinamica-uber/
├── 05-elasticidade-online-retail/
├── 06-deteccao-fraude/
├── 07-qualidade-vinho/
├── 08-previsao-premio-seguro/
├── blog/                  # posts técnicos (HTML)
├── requirements/          # 1 arquivo de dependências por projeto + 1 agregado
├── index.html             # site do portfólio
├── style.css
└── script.js
```

## Como rodar

Cada projeto tem seu próprio arquivo de dependências em `requirements/` (nem todos usam as
mesmas bibliotecas). Para rodar um projeto específico:

```bash
pip install -r requirements/01-titanic-classificacao.txt
jupyter notebook 01-titanic-classificacao/titanic_analise.ipynb
```

Para instalar tudo que é usado em qualquer notebook do portfólio de uma vez:

```bash
pip install -r requirements/requirements.txt
```

**Datasets grandes (não versionados no repo):** dois datasets ultrapassam o limite de tamanho
do GitHub e foram excluídos via `.gitignore` — baixe e coloque na pasta do projeto antes de rodar:

- [Credit Card Fraud Detection](https://www.kaggle.com/mlg-ulb/creditcardfraud) → `06-deteccao-fraude/creditcard.csv`
- [Online Retail II (UCI)](https://www.kaggle.com/datasets/mashlyn/online-retail-ii-uci) → `05-elasticidade-online-retail/online_retail_II.csv`
