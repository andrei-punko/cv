# CV and other hiring-related stuff
[![MD to PDF](https://github.com/andrei-punko/cv/actions/workflows/convert-md-to-pdf.yml/badge.svg)](https://github.com/andrei-punko/cv/actions/workflows/convert-md-to-pdf.yml)

## CV

- Eng
  - In [PDF](CV/pdf/Andrei_Punko_CV_(eng).pdf) or [Markdown](CV/Andrei_Punko_CV_(eng).md) format
- Rus
  - В [PDF](CV/pdf/Andrei_Punko_CV_(rus).pdf) или [Markdown](CV/Andrei_Punko_CV_(rus).md) формате

## Communication with recruiter
[Ответы на типичные вопросы рекрутера](QnA/Ответы%20на%20типичные%20вопросы%20рекрутера.md)

[Вопросы потенциальному работодателю](QnA/Вопросы%20потенциальному%20работодателю.md)

## Self-presentation for an interview
[Мануал по самопрезентации](Self-presentation/Мануал%20по%20самопрезентации.pdf)

[Self-presentation](Self-presentation/Self-presentation.md)

[Самопрезентация](Self-presentation/Самопрезентация.md)

## Newcomer introduction to a new company
[Newcomer introduction](Newcomer%20introduction/Andrei%20Punko%20-%20Newcomer%20introduction.md)

[Представление сотрудника](Newcomer%20introduction/Андрей%20Пунько%20-%20Представление%20сотрудника.md)

## Appendix

<details>
  <summary><b>CV generation (from Markdown to PDF) process description</b></summary>

- Adjust CV [source](CV/Andrei_Punko_CV_(eng).md) in Markdown format
- Adjust CSS [style](CV/style.css) if needed
- To generate:
  - Run [shell script](CV/generate-pdf.sh) if you need to generate CV locally or
  - Push changes into [repo](https://github.com/andrei-punko/cv) to generate CV using GitHub
    actions [workflow](.github/workflows/convert-md-to-pdf.yml) and pull new commit with generated PDF
- Get [generated CV](CV/pdf/Andrei_Punko_CV_(eng).pdf) in PDF format from [CV/pdf](CV/pdf) folder
</details>
