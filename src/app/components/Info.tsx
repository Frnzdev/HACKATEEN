"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Info() {
  const { t } = useTranslation();

  return (
    <section
      id="informacoes"
      className="w-full py-16 px-6 bg-gradient-to-r from-white to-blue-400 dark:from-black dark:to-black/90"
    >
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          {t('Info.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ONGs */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              {t('Info.ongs_support')}
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-gray-300">
              <li>
                <Link className="hover:underline" href="https://www.acnur.org" target="_blank">
                  👐 {t('Info.unhcr')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://www.caritas.org.br" target="_blank">
                  🤝 {t('Info.caritas')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://www.migrante.org.br/" target="_blank">
                  🌍 {t('Info.imdh')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://www.msf.org" target="_blank">
                  🏥 {t('Info.msf')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Oportunidades de Trabalho */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              {t('Info.where_to_work')}
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-gray-300">
              <li>
                <Link className="hover:underline" href="https://cate.prefeitura.sp.gov.br/o-cate/" target="_blank">
                  🏭 {t('Info.cat_centers')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://www.empresascomrefugiados.com.br/contratacao" target="_blank">
                  💼 {t('Info.inclusive_companies')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://www.cooperativas.org.br" target="_blank">
                  🧵 {t('Info.cooperatives')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://cate.prefeitura.sp.gov.br/cursos/" target="_blank">
                  🛠️ {t('Info.training_courses')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Educação */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              {t('Info.education_training')}
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-gray-300">
              <li>
                <Link className="hover:underline" href="https://www.etec.sp.gov.br" target="_blank">
                  📚 {t('Info.etecs')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://www.pensarcursos.com.br/curso/basico-de-portugues?utm_source=google&utm_medium=&utm_campaign=21937447105&utm_content=&utm_term=&gad_source=1&gbraid=0AAAAAD3Ezt14k940vUFRyDP03FymDM6Uw&gclid=Cj0KCQjw_dbABhC5ARIsAAh2Z-Srdl2xRzIASIvhh--tH2YdKB-zWmwDyorGBM7vvTTHobHxFZVmmGMaAsBIEALw_wcB" target="_blank">
                  🧑‍🏫 {t('Info.free_portuguese_courses')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://www.fiap.com.br/graduacao/?utm_term=&utm_campaign=GRAD+-+PMax&utm_source=adwords&utm_medium=ppc&hsa_acc=3358810376&hsa_cam=20443108528&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gbraid=0AAAAADqmiBC11_F1KwubXQlalfufS8_AZ&gclid=Cj0KCQjw_dbABhC5ARIsAAh2Z-TIVYb3jSskIXuc0TZCH7MMzv0V9_O8Wv-vIMmFS8ydqaiGeibzgCsaAvOZEALw_wcB" target="_blank">
                  🎓 {t('Info.scholarships')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://sed.educacao.sp.gov.br/nca/preinscricaoonline/login" target="_blank">
                  📱 {t('Info.digital_followup')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}