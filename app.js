// ============================================================
// RECETARIO LRU — lógica de app
// ============================================================

const ADMIN_PASSWORD = "LRU2026"; // clave de administrador
const RECETAS_SEED_BM = [
  {
    "id": "bm_ceviche_de_pescado",
    "nombre": "Ceviche de Pescado",
    "categoria": "Ceviches",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají limo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cilantro / culantro",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Camote",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Choclo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Cancha / maíz",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Leche de tigre",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Sal / ají (sazón)",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_ceviche_mixto",
    "nombre": "Ceviche Mixto",
    "categoria": "Ceviches",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Calamar",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Pulpo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají limo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cilantro / culantro",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Camote",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Choclo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Leche de tigre",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_ceviche_conchas_negras",
    "nombre": "Ceviche Conchas Negras",
    "categoria": "Ceviches",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Conchas negras",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají limo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cilantro / culantro",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Leche de tigre",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Camote",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_ceviche_maretazo",
    "nombre": "Ceviche Maretazo",
    "categoria": "Ceviches",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Conchas negras",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají limo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Leche de tigre",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Camote",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_tiradito_natural",
    "nombre": "Tiradito Natural",
    "categoria": "Tiraditos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají limo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Leche de tigre",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_tiradito_aj_amarillo",
    "nombre": "Tiradito Ají Amarillo",
    "categoria": "Tiraditos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Crema de ají amarillo",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_tiradito_apaltado",
    "nombre": "Tiradito Apaltado",
    "categoria": "Tiraditos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Palta",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Aceite de oliva",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Alcaparras",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_arroz_con_mariscos",
    "nombre": "Arroz con Mariscos",
    "categoria": "Arroces",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Mariscos surtidos (mix)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Ají amarillo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Pimientos",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_chaufa_de_pescado_o_mariscos",
    "nombre": "Chaufa de Pescado o Mariscos",
    "categoria": "Arroces",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Mariscos surtidos (mix)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Chaufa (base preparada)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Huevo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Poro",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_chicharr_n_de_calamar",
    "nombre": "Chicharrón de Calamar",
    "categoria": "Chicharrones",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Calamar",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Panko (empanizado)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Yuca",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa criolla",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_chicharr_n_de_pescado_o_mixto",
    "nombre": "Chicharrón de Pescado o Mixto",
    "categoria": "Chicharrones",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Panko (empanizado)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Yuca",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa criolla",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_chicharr_n_de_pollo",
    "nombre": "Chicharrón de Pollo",
    "categoria": "Chicharrones",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pollo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Panko (empanizado)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Yuca",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa criolla",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_filete_a_la_milanesa",
    "nombre": "Filete a la Milanesa",
    "categoria": "Filetes",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Panko (empanizado)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Huevo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Papa (para papas doradas)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Mix de lechugas",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_lomo_saltado",
    "nombre": "Lomo Saltado",
    "categoria": "Saltados",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Lomo fino (res)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Tomate",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cilantro / culantro",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Papa (para papas fritas)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_saltado_mar_y_tierra",
    "nombre": "Saltado Mar y Tierra",
    "categoria": "Saltados",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Lomo fino (res)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Tomate",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Papa (para papas fritas)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_lomo_fino_a_la_parrilla",
    "nombre": "Lomo Fino a la Parrilla",
    "categoria": "Fondos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Lomo fino (res)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Papa (para papas doradas)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Zucchini",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Brócoli",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Zanahoria",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_pulpo_a_la_gallega",
    "nombre": "Pulpo a la Gallega",
    "categoria": "Fondos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pulpo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Papa amarilla",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Aceite de oliva",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Sal / páprika",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_pulpo_al_chimichurri",
    "nombre": "Pulpo al Chimichurri",
    "categoria": "Fondos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pulpo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Chimichurri",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Mix de lechugas",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_langostinos_al_ajillo",
    "nombre": "Langostinos al Ajillo",
    "categoria": "Fondos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Ajo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Mantequilla",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Papa (para papas)",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_crab_pasta",
    "nombre": "Crab Pasta",
    "categoria": "Pastas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pulpa de cangrejo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fideos / pasta artesanal",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa bechamel",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Choclo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Almendras",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_langostinos_a_la_crema",
    "nombre": "Langostinos a la Crema",
    "categoria": "Pastas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fideos / pasta artesanal",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa americana",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_a_la_huanca_na_con_lomo_fino",
    "nombre": "A la Huancaína con Lomo Fino",
    "categoria": "Pastas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Lomo fino (res)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fideos / pasta artesanal",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa huancaína",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Queso fresco",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_lasagna_lomo_fino",
    "nombre": "Lasagna Lomo Fino",
    "categoria": "Lasagnas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Lomo fino (res)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fideos / pasta artesanal",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa de tomate y ají",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Queso parmesano",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_lasagna_langostinos",
    "nombre": "Lasagna Langostinos",
    "categoria": "Lasagnas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fideos / pasta artesanal",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa rosé",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Queso parmesano",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_lasagna_vegetariana",
    "nombre": "Lasagna Vegetariana",
    "categoria": "Lasagnas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Zucchini",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Champiñones / hongos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Brócoli",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fideos / pasta artesanal",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa bechamel",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Queso parmesano",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_risotto_blanco_langostinos_pulpo",
    "nombre": "Risotto Blanco (Langostinos/Pulpo)",
    "categoria": "Risottos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Pulpo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz crudo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Maracuyá",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Queso parmesano",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_risotto_ros_mariscos",
    "nombre": "Risotto Rosé (Mariscos)",
    "categoria": "Risottos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Mariscos surtidos (mix)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz crudo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Bisque de langostinos",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_parihuela",
    "nombre": "Parihuela",
    "categoria": "Sopas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Mariscos surtidos (mix)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Pulpa de cangrejo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fondo / caldo de pescado",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají amarillo",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_chupe_langostinos_pescado",
    "nombre": "Chupe (Langostinos/Pescado)",
    "categoria": "Sopas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Langostinos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Papa amarilla",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Queso fresco",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Huevo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Fondo / caldo de pescado",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_chilcano_de_pescado",
    "nombre": "Chilcano de Pescado",
    "categoria": "Sopas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fondo / caldo de pescado",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Hierbas frescas",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_sopa_de_pollo",
    "nombre": "Sopa de Pollo",
    "categoria": "Sopas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pollo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Fondo / caldo (pollo)",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Verduras surtidas",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_ensalada_c_sar",
    "nombre": "Ensalada César",
    "categoria": "Ensaladas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Lechuga romana",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Queso parmesano",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Tomate cherry",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Langostinos o Pollo (opcional)",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_cangrejo_dormido",
    "nombre": "Cangrejo Dormido",
    "categoria": "Ensaladas",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pulpa de cangrejo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Mix de lechugas",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Palta",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Tomate",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Choclo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Pimientos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_papa_a_la_huanca_na",
    "nombre": "Papa a la Huancaína",
    "categoria": "Criollos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Papa amarilla",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa huancaína",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Huevo",
        "cantidad": "",
        "unidad": "unidad"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_arroz_con_pollo",
    "nombre": "Arroz con Pollo",
    "categoria": "Criollos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pollo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cilantro / culantro",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Ají amarillo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa criolla",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_aj_de_gallina",
    "nombre": "Ají de Gallina",
    "categoria": "Criollos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pechuga de pollo deshilachado",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Crema de ají amarillo",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Papa amarilla",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Huevo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Queso fresco",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_seco_de_asado_de_tira",
    "nombre": "Seco de Asado de Tira",
    "categoria": "Criollos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Carne para seco (res)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cilantro / culantro",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Ají amarillo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Yuca",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_pichanguitas",
    "nombre": "Pichanguitas",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Mariscos surtidos (mix)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_causitas_bonsai",
    "nombre": "Causitas Bonsai",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Masa de papa (para causa)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Mariscos surtidos (mix)",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_leche_de_tigre",
    "nombre": "Leche de Tigre",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Leche de tigre",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Pescado (filete fresco)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cancha / maíz",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_leche_de_pantera",
    "nombre": "Leche de Pantera",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Leche de pantera",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Conchas negras",
        "cantidad": "",
        "unidad": "unidad"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_tartare_acevichado",
    "nombre": "Tartare Acevichado",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Bonito",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Palta",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Mango",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Salsa acevichada",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_teque_os",
    "nombre": "Tequeños",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Masa wantán",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Queso fresco",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Calamar / lomo (según versión)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Salsa rosé",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_langostinos_al_panko",
    "nombre": "Langostinos al Panko",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Langostinos Jumbo",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Panko (empanizado)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Maracuyá",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_conchitas_vieiras",
    "nombre": "Conchitas (Vieiras)",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Conchas / vieiras",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Queso parmesano",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Mantequilla",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_causas",
    "nombre": "Causas",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Masa de papa (para causa)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Pulpo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Pulpa de cangrejo",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_pulpo_al_olivar",
    "nombre": "Pulpo al Olivar",
    "categoria": "Piqueos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Pulpo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Aceituna (crema de olivo)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Aceite de oliva",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_causa_veggie_anticuchera",
    "nombre": "Causa Veggie Anticuchera",
    "categoria": "Vegetarianos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Masa de papa (para causa)",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Ají amarillo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Zucchini",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Champiñones / hongos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Palta",
        "cantidad": "",
        "unidad": "unidad"
      },
      {
        "nombre": "Tomate cherry",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Poro",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_ceviche_de_champi_ones",
    "nombre": "Ceviche de Champiñones",
    "categoria": "Vegetarianos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Champiñones / hongos",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Limón",
        "cantidad": "",
        "unidad": "ml"
      },
      {
        "nombre": "Ají limo",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Cebolla roja",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_veggie_fried_rice",
    "nombre": "Veggie Fried Rice",
    "categoria": "Vegetarianos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Arroz cocido",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Zucchini",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Brócoli",
        "cantidad": "",
        "unidad": "g"
      },
      {
        "nombre": "Zanahoria",
        "cantidad": "",
        "unidad": "g"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_arma_tu_barra",
    "nombre": "Arma tu Barra",
    "categoria": "Combos",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "(Escoge 2: Ceviche/Chaufa/Arroz Mariscos/Chicharrón)",
        "cantidad": "",
        "unidad": "porción"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_tiramis",
    "nombre": "Tiramisú",
    "categoria": "Postres",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Tiramisú (postre)",
        "cantidad": "",
        "unidad": "porción"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_cr_me_br_l_e",
    "nombre": "Crème Brûlée",
    "categoria": "Postres",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Crème Brûlée (postre)",
        "cantidad": "",
        "unidad": "porción"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "bm_suspiro_lime_o",
    "nombre": "Suspiro Limeño",
    "categoria": "Postres",
    "porciones": "1",
    "alergenos": "",
    "notas": "",
    "foto": "",
    "ingredientes": [
      {
        "nombre": "Suspiro Limeño (postre)",
        "cantidad": "",
        "unidad": "porción"
      }
    ],
    "pasos": [],
    "savedAt": "2026-01-01T00:00:00.000Z"
  }
];

const DEFAULT_LOGO = "data:image/png;base64,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";

let STATE = {
  clients: [],       // [{id, name, pin, active, createdAt}]
  recipes: {},        // { clientId: [ {id, nombre, categoria, porciones, alergenos, ingredientes:[], pasos:[], notas, savedAt} ] }
  logos: [],           // [{id, name, dataUrl}]
};

let currentClient = null; // client object when logged in as client
let pinBuffer = "";
let adminMode = false;
let unsubscribeSnapshot = null;

// ---------- Firebase Firestore ----------

async function loadState() {
  try {
    const { getFirestore, doc, getDoc } = window.__firestoreFns;
    const ref = doc(getFirestore(window.__firebaseApp), "recetario_lru", "estado");
    const snap = await getDoc(ref);
    if (snap.exists()) {
      STATE = snap.data();
    }
  } catch (e) {
    console.log("Sin estado previo o error de conexión, iniciando vacío.", e);
  }
  if (!STATE.clients) STATE.clients = [];
  if (!STATE.recipes) STATE.recipes = {};
  if (!STATE.logos) STATE.logos = [];
}

async function saveState() {
  try {
    const { getFirestore, doc, setDoc } = window.__firestoreFns;
    const ref = doc(getFirestore(window.__firebaseApp), "recetario_lru", "estado");
    await setDoc(ref, STATE);
  } catch (e) {
    console.error("Error guardando estado", e);
    toast("No se pudo guardar. Revisa tu conexión a internet.", true);
  }
}

// Escucha cambios en tiempo real (para que el panel admin se actualice solo)
function listenLiveUpdates(onUpdate) {
  try {
    const { getFirestore, doc, onSnapshot } = window.__firestoreFns;
    const ref = doc(getFirestore(window.__firebaseApp), "recetario_lru", "estado");
    if (unsubscribeSnapshot) unsubscribeSnapshot();
    unsubscribeSnapshot = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        STATE = snap.data();
        if (!STATE.clients) STATE.clients = [];
        if (!STATE.recipes) STATE.recipes = {};
        if (!STATE.logos) STATE.logos = [];
        if (onUpdate) onUpdate();
      }
    });
  } catch (e) {
    console.error("Error escuchando cambios en vivo", e);
  }
}

function uid(prefix = "id") {
  return prefix + "_" + Math.random().toString(36).slice(2, 10);
}

function toast(msg, isErr = false) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast show" + (isErr ? "" : " ok");
  setTimeout(() => (t.className = "toast"), 2200);
}

function esc(s) {
  return String(s == null ? "" : s).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ============================================================
// LOGIN / PIN PAD
// ============================================================
function renderPinPad() {
  const pad = document.getElementById("pinPad");
  const keys = ["1","2","3","4","5","6","7","8","9","","0","⌫"];
  pad.innerHTML = "";
  keys.forEach(k => {
    const btn = document.createElement("button");
    if (k === "") {
      btn.className = "pin-key ghost";
      btn.disabled = true;
    } else if (k === "⌫") {
      btn.className = "pin-key ghost";
      btn.textContent = "⌫";
      btn.onclick = () => { pinBuffer = pinBuffer.slice(0, -1); renderPinDots(); };
    } else {
      btn.className = "pin-key";
      btn.textContent = k;
      btn.onclick = () => onPinDigit(k);
    }
    if (k !== "") btn.textContent = k;
    pad.appendChild(btn);
  });
}

function renderPinDots() {
  const dots = document.getElementById("pinDots");
  dots.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const d = document.createElement("div");
    d.className = "pin-dot" + (i < pinBuffer.length ? " filled" : "");
    dots.appendChild(d);
  }
}

function clearPinError() {
  document.querySelectorAll(".pin-dot").forEach(d => d.classList.remove("err"));
  document.getElementById("loginError").textContent = "";
}

function onPinDigit(d) {
  if (pinBuffer.length >= 4) return;
  if (pinBuffer.length === 0) clearPinError();
  pinBuffer += d;
  renderPinDots();
  if (pinBuffer.length === 4) {
    setTimeout(tryLogin, 150);
  }
}

function tryLogin() {
  const client = STATE.clients.find(c => c.pin === pinBuffer && c.active);
  const errEl = document.getElementById("loginError");
  if (client) {
    currentClient = client;
    pinBuffer = "";
    errEl.textContent = "";
    enterClientApp();
  } else {
    const revoked = STATE.clients.find(c => c.pin === pinBuffer && !c.active);
    errEl.textContent = revoked ? "Este acceso fue revocado." : "PIN incorrecto.";
    document.querySelectorAll(".pin-dot").forEach(d => d.classList.add("err"));
    setTimeout(() => {
      pinBuffer = "";
      renderPinDots();
    }, 500);
  }
}

// ============================================================
// CLIENT APP
// ============================================================
let ingCounter = 0;
let stepCounter = 0;
let currentPhotoDataUrl = null; // foto comprimida en memoria, antes de subir
let currentPhotoUrl = null;     // URL ya subida a Storage (si existía una receta con foto)

function resizeImg(dataUrl, maxWidth, cb) {
  const img = new Image();
  img.onload = () => {
    const scale = Math.min(1, maxWidth / img.width);
    const canvas = document.createElement("canvas");
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    cb(canvas.toDataURL("image/jpeg", 0.82));
  };
  img.src = dataUrl;
}

function setupPhotoBox() {
  const box = document.getElementById("photoBox");
  const input = document.getElementById("photoInput");
  const preview = document.getElementById("photoPreview");
  const hint = document.getElementById("photoHint");
  const actions = document.getElementById("photoActions");

  box.onclick = () => input.click();
  document.getElementById("photoChangeBtn").onclick = (e) => { e.stopPropagation(); input.click(); };
  document.getElementById("photoRemoveBtn").onclick = (e) => {
    e.stopPropagation();
    currentPhotoDataUrl = null;
    currentPhotoUrl = null;
    preview.classList.add("hidden");
    hint.classList.remove("hidden");
    actions.classList.add("hidden");
  };

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      resizeImg(ev.target.result, 900, (compressed) => {
        currentPhotoDataUrl = compressed;
        currentPhotoUrl = null; // se subirá al guardar
        preview.src = compressed;
        preview.classList.remove("hidden");
        hint.classList.add("hidden");
        actions.classList.remove("hidden");
      });
    };
    reader.readAsDataURL(file);
    input.value = "";
  };
}

function resetPhotoBox() {
  currentPhotoDataUrl = null;
  currentPhotoUrl = null;
  document.getElementById("photoPreview").classList.add("hidden");
  document.getElementById("photoHint").classList.remove("hidden");
  document.getElementById("photoActions").classList.add("hidden");
}

async function uploadPhotoIfNeeded(recipeId) {
  if (!currentPhotoDataUrl) return currentPhotoUrl || null; // sin cambios, o sin foto
  try {
    document.getElementById("photoUploading").classList.remove("hidden");
    const { getStorage, ref, uploadString, getDownloadURL } = window.__storageFns;
    const path = `recetario_lru/${currentClient.id}/${recipeId}.jpg`;
    const sRef = ref(getStorage(window.__firebaseApp), path);
    await uploadString(sRef, currentPhotoDataUrl, "data_url");
    const url = await getDownloadURL(sRef);
    document.getElementById("photoUploading").classList.add("hidden");
    return url;
  } catch (e) {
    document.getElementById("photoUploading").classList.add("hidden");
    console.error("Error subiendo foto", e);
    toast("No se pudo subir la foto, pero la receta se guardará sin ella.", true);
    return null;
  }
}

let returnToAdminAfterSave = false;

function openAdminRecipeEditor(recipe, ownerClientId) {
  const owner = STATE.clients.find(c => c.id === ownerClientId);
  returnToAdminAfterSave = true;

  document.getElementById("adminScreen").classList.add("hidden");
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");
  document.getElementById("clientName").textContent = (owner ? owner.name : "Cliente") + " (editando como admin)";
  document.getElementById("clientLogo").src = owner ? getClientLogo(owner) : DEFAULT_LOGO;
  document.getElementById("logoutBtn").textContent = "Volver al panel admin";

  loadRecipeToForm(recipe, ownerClientId);
  renderSavedList_forAdminContext(ownerClientId);
}

// Cuando el admin edita, la sección "Tus recetas guardadas" del formulario
// debe mostrar las recetas del cliente dueño, no las de un PIN propio.
function renderSavedList_forAdminContext(ownerClientId) {
  const list = document.getElementById("savedList");
  const recipes = STATE.recipes[ownerClientId] || [];
  if (recipes.length === 0) {
    list.innerHTML = `<div class="empty-state">Este cliente aún no tiene recetas guardadas.</div>`;
    return;
  }
  list.innerHTML = "";
  recipes.slice().reverse().forEach(r => {
    const item = document.createElement("div");
    item.className = "saved-item";
    const thumb = r.foto ? `<img src="${r.foto}" style="width:44px;height:44px;border-radius:8px;object-fit:cover;margin-right:10px;flex-shrink:0;">` : "";
    item.innerHTML = `
      <div style="display:flex; align-items:center; flex:1; min-width:0;">
        ${thumb}
        <div style="min-width:0;">
          <div class="si-name">${esc(r.nombre)}</div>
          <div class="si-meta">${esc(r.categoria || "Sin categoría")} · ${r.ingredientes.length} ingredientes</div>
        </div>
      </div>
      <div class="si-actions">
        <button class="mini-btn" data-action="edit" data-id="${r.id}">Editar</button>
      </div>
    `;
    list.appendChild(item);
  });
  list.querySelectorAll("[data-action]").forEach(btn => {
    btn.onclick = () => {
      const r = recipes.find(x => x.id === btn.dataset.id);
      loadRecipeToForm(r, ownerClientId);
      renderSavedList_forAdminContext(ownerClientId);
    };
  });
}

function enterClientApp() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("adminScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");
  document.getElementById("clientName").textContent = currentClient.name;
  const logo = getClientLogo(currentClient);
  document.getElementById("clientLogo").src = logo;
  clearForm();
  renderSavedList();
}

function getClientLogo(client) {
  if (client.logoId) {
    const l = STATE.logos.find(x => x.id === client.logoId);
    if (l) return l.dataUrl;
  }
  return DEFAULT_LOGO;
}

function addIngredientRow(data = {}) {
  ingCounter++;
  const id = "ing_" + ingCounter;
  const list = document.getElementById("ingList");
  const row = document.createElement("div");
  row.className = "ing-row";
  row.id = id;
  row.innerHTML = `
    <input type="text" placeholder="Ingrediente" class="ing-nombre" value="${esc(data.nombre || "")}">
    <input type="text" placeholder="Cantidad" class="ing-cant" value="${esc(data.cantidad || "")}">
    <input type="text" placeholder="Unidad" class="ing-uni" value="${esc(data.unidad || "")}">
    <button class="ing-del" title="Eliminar">✕</button>
  `;
  row.querySelector(".ing-del").onclick = () => row.remove();
  list.appendChild(row);
}

function addStepRow(data = "") {
  stepCounter++;
  const list = document.getElementById("stepList");
  const row = document.createElement("div");
  row.className = "step-row";
  const num = list.children.length + 1;
  row.innerHTML = `
    <div class="step-num">${num}</div>
    <textarea placeholder="Describe este paso...">${esc(data)}</textarea>
    <button class="step-del" title="Eliminar">✕</button>
  `;
  row.querySelector(".step-del").onclick = () => { row.remove(); renumberSteps(); };
  list.appendChild(row);
}

function renumberSteps() {
  document.querySelectorAll("#stepList .step-row").forEach((row, i) => {
    row.querySelector(".step-num").textContent = i + 1;
  });
}

let editingRecipeId = null;   // si no es null, guardar() actualiza en vez de crear
let editingClientId = null;   // dueño de la receta que se está editando (para admin)

function clearForm() {
  editingRecipeId = null;
  editingClientId = null;
  document.getElementById("f-nombre").value = "";
  document.getElementById("f-categoria").value = "";
  document.getElementById("f-porciones").value = "";
  document.getElementById("f-alergenos").value = "";
  document.getElementById("f-notas").value = "";
  document.getElementById("ingList").innerHTML = "";
  document.getElementById("stepList").innerHTML = "";
  resetPhotoBox();
  addIngredientRow();
  addIngredientRow();
  addStepRow();
  updateSaveButtonLabel();
}

function updateSaveButtonLabel() {
  const btn = document.getElementById("saveBtn");
  if (!btn) return;
  btn.innerHTML = editingRecipeId ? "💾 Actualizar receta" : "💾 Guardar receta";
}

function loadRecipeToForm(recipe, ownerClientId) {
  editingRecipeId = recipe.id;
  editingClientId = ownerClientId;

  document.getElementById("f-nombre").value = recipe.nombre || "";
  document.getElementById("f-categoria").value = recipe.categoria || "";
  document.getElementById("f-porciones").value = recipe.porciones || "";
  document.getElementById("f-alergenos").value = recipe.alergenos || "";
  document.getElementById("f-notas").value = recipe.notas || "";

  document.getElementById("ingList").innerHTML = "";
  document.getElementById("stepList").innerHTML = "";
  (recipe.ingredientes || []).forEach(i => addIngredientRow(i));
  if ((recipe.ingredientes || []).length === 0) { addIngredientRow(); addIngredientRow(); }
  (recipe.pasos || []).forEach(p => addStepRow(p));
  if ((recipe.pasos || []).length === 0) addStepRow();

  resetPhotoBox();
  if (recipe.foto) {
    currentPhotoUrl = recipe.foto;
    currentPhotoDataUrl = null;
    const preview = document.getElementById("photoPreview");
    preview.src = recipe.foto;
    preview.classList.remove("hidden");
    document.getElementById("photoHint").classList.add("hidden");
    document.getElementById("photoActions").classList.remove("hidden");
  }

  updateSaveButtonLabel();
  window.scrollTo({ top: 0, behavior: "smooth" });
  toast("Editando: " + recipe.nombre);
}

function collectFormData() {
  const nombre = document.getElementById("f-nombre").value.trim();
  const categoria = document.getElementById("f-categoria").value.trim();
  const porciones = document.getElementById("f-porciones").value.trim();
  const alergenos = document.getElementById("f-alergenos").value.trim();
  const notas = document.getElementById("f-notas").value.trim();

  const ingredientes = [];
  document.querySelectorAll("#ingList .ing-row").forEach(row => {
    const n = row.querySelector(".ing-nombre").value.trim();
    const c = row.querySelector(".ing-cant").value.trim();
    const u = row.querySelector(".ing-uni").value.trim();
    if (n) ingredientes.push({ nombre: n, cantidad: c, unidad: u });
  });

  const pasos = [];
  document.querySelectorAll("#stepList .step-row textarea").forEach(t => {
    const v = t.value.trim();
    if (v) pasos.push(v);
  });

  return { nombre, categoria, porciones, alergenos, notas, ingredientes, pasos };
}

async function saveRecipe() {
  const data = collectFormData();
  if (!data.nombre) {
    toast("Escribe el nombre del plato antes de guardar.", true);
    document.getElementById("f-nombre").focus();
    return;
  }
  if (data.ingredientes.length === 0) {
    toast("Agrega al menos un ingrediente.", true);
    return;
  }

  const targetClientId = editingClientId || currentClient.id;
  const recipeId = editingRecipeId || uid("rec");
  const fotoUrl = await uploadPhotoIfNeeded(recipeId);

  if (!STATE.recipes[targetClientId]) STATE.recipes[targetClientId] = [];

  if (editingRecipeId) {
    const idx = STATE.recipes[targetClientId].findIndex(r => r.id === editingRecipeId);
    const previous = idx > -1 ? STATE.recipes[targetClientId][idx] : {};
    const updated = {
      ...previous,
      id: recipeId,
      foto: fotoUrl || previous.foto || "",
      ...data,
      savedAt: previous.savedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    if (idx > -1) STATE.recipes[targetClientId][idx] = updated;
    else STATE.recipes[targetClientId].push(updated);
  } else {
    const recipe = {
      id: recipeId,
      foto: fotoUrl || "",
      ...data,
      savedAt: new Date().toISOString(),
    };
    STATE.recipes[targetClientId].push(recipe);
  }

  await saveState();

  toast(editingRecipeId ? "Receta actualizada ✓" : "Receta guardada ✓");
  const wasReturningToAdmin = returnToAdminAfterSave;
  clearForm();

  if (wasReturningToAdmin) {
    returnToAdminAfterSave = false;
    document.getElementById("logoutBtn").textContent = "Salir";
    document.getElementById("appScreen").classList.add("hidden");
    document.getElementById("adminScreen").classList.remove("hidden");
    renderClientList();
    renderRecetaListAdmin();
  } else if (adminMode) {
    renderRecetaListAdmin();
  } else {
    renderSavedList();
  }
}

function renderSavedList() {
  const list = document.getElementById("savedList");
  const allRecipes = STATE.recipes[currentClient.id] || [];
  const query = (document.getElementById("savedSearch")?.value || "").trim().toLowerCase();
  const recipes = query ? allRecipes.filter(r => r.nombre.toLowerCase().includes(query)) : allRecipes;

  if (allRecipes.length === 0) {
    list.innerHTML = `<div class="empty-state">Aún no has guardado ninguna receta.</div>`;
    return;
  }
  if (recipes.length === 0) {
    list.innerHTML = `<div class="empty-state">No se encontró ninguna receta con ese nombre.</div>`;
    return;
  }
  list.innerHTML = "";
  recipes.slice().reverse().forEach(r => {
    const item = document.createElement("div");
    item.className = "saved-item";
    const date = new Date(r.savedAt);
    const thumb = r.foto ? `<img src="${r.foto}" style="width:44px;height:44px;border-radius:8px;object-fit:cover;margin-right:10px;flex-shrink:0;">` : "";
    item.innerHTML = `
      <div style="display:flex; align-items:center; flex:1; min-width:0;">
        ${thumb}
        <div style="min-width:0;">
          <div class="si-name">${esc(r.nombre)}</div>
          <div class="si-meta">${esc(r.categoria || "Sin categoría")} · ${r.ingredientes.length} ingredientes · ${date.toLocaleDateString('es-PE')}</div>
        </div>
      </div>
      <div class="si-actions">
        <button class="mini-btn" data-action="edit" data-id="${r.id}">Editar</button>
        <button class="mini-btn" data-action="excel" data-id="${r.id}">Excel</button>
        <button class="mini-btn" data-action="word" data-id="${r.id}">Word</button>
      </div>
    `;
    list.appendChild(item);
  });
  list.querySelectorAll("[data-action]").forEach(btn => {
    btn.onclick = () => {
      const r = allRecipes.find(x => x.id === btn.dataset.id);
      if (btn.dataset.action === "excel") exportRecipeExcel(r);
      else if (btn.dataset.action === "word") exportRecipeWord(r);
      else loadRecipeToForm(r, currentClient.id);
    };
  });
}

// ============================================================
// EXPORT: single recipe -> Excel
// ============================================================
function waitForLib(checkFn, name, maxWaitMs = 6000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      if (checkFn()) { resolve(); return; }
      if (Date.now() - start > maxWaitMs) {
        reject(new Error(`${name} no cargó a tiempo`));
        return;
      }
      setTimeout(tick, 150);
    };
    tick();
  });
}

async function ensureDocx() {
  try {
    await waitForLib(() => typeof docx !== "undefined", "docx.js");
    return true;
  } catch (e) {
    toast("No se pudo cargar el generador de Word. Revisa tu conexión e intenta de nuevo.", true);
    return false;
  }
}

async function ensureXLSX() {
  try {
    await waitForLib(() => typeof XLSX !== "undefined", "xlsx.js");
    return true;
  } catch (e) {
    toast("No se pudo cargar el generador de Excel. Revisa tu conexión e intenta de nuevo.", true);
    return false;
  }
}

async function exportRecipeExcel(r) {
  if (!(await ensureXLSX())) return;
  const wb = XLSX.utils.book_new();
  const rows = [
    ["RECETA", r.nombre],
    ["Categoría", r.categoria || ""],
    ["Porciones", r.porciones || ""],
    ["Alérgenos", r.alergenos || ""],
    [],
    ["INGREDIENTES"],
    ["Ingrediente", "Cantidad", "Unidad"],
    ...r.ingredientes.map(i => [i.nombre, i.cantidad, i.unidad]),
    [],
    ["PROCEDIMIENTO"],
    ...r.pasos.map((p, i) => [`Paso ${i + 1}`, p]),
    [],
    ["NOTAS", r.notas || ""],
  ];
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws["!cols"] = [{ wch: 22 }, { wch: 40 }, { wch: 14 }];
  XLSX.utils.book_append_sheet(wb, ws, "Receta");
  XLSX.writeFile(wb, `Receta_${slug(r.nombre)}.xlsx`);
  toast("Excel descargado ✓");
}

// ============================================================
// EXPORT: single recipe -> Word
// ============================================================
async function fetchImageAsUint8Array(url) {
  if (!url) return null;
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const buf = await blob.arrayBuffer();
    return new Uint8Array(buf);
  } catch (e) {
    console.error("No se pudo descargar la foto para el Word:", e);
    return null;
  }
}

async function exportRecipeWord(r) {
  if (!(await ensureDocx())) return;
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, AlignmentType, ImageRun } = docx;

  const ingRows = [
    new TableRow({
      children: [
        cellHead("Ingrediente"), cellHead("Cantidad"), cellHead("Unidad"),
      ],
    }),
    ...r.ingredientes.map(i => new TableRow({
      children: [cellBody(i.nombre), cellBody(i.cantidad), cellBody(i.unidad)],
    })),
  ];

  function cellHead(t) {
    return new TableCell({
      shading: { fill: "1B2A4A" },
      children: [new Paragraph({ children: [new TextRun({ text: t, bold: true, color: "FFFFFF", size: 20 })] })],
    });
  }
  function cellBody(t) {
    return new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: String(t || ""), size: 20 })] })] });
  }

  const children = [
    new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: r.nombre, bold: true, color: "1B2A4A", size: 40 })] }),
  ];

  if (r.foto) {
    const imgBytes = await fetchImageAsUint8Array(r.foto);
    if (imgBytes) {
      children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 150, after: 200 },
        children: [ new ImageRun({ type: "jpg", data: imgBytes, transformation: { width: 460, height: 290 } }) ],
      }));
    }
  }

  children.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: `${r.categoria || "Sin categoría"} · ${r.porciones || "-"} porciones`, italics: true, size: 22, color: "6b7080" })] }));

  if (r.alergenos) {
    children.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Alérgenos: ", bold: true, size: 22 }), new TextRun({ text: r.alergenos, size: 22 })] }));
  }

  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 }, children: [new TextRun({ text: "Ingredientes", bold: true, color: "B8862B", size: 26 })] }));
  children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: ingRows }));

  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 }, children: [new TextRun({ text: "Procedimiento", bold: true, color: "B8862B", size: 26 })] }));
  r.pasos.forEach((p, i) => {
    children.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: `${i + 1}. `, bold: true, size: 22 }), new TextRun({ text: p, size: 22 })] }));
  });

  if (r.notas) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 }, children: [new TextRun({ text: "Notas", bold: true, color: "B8862B", size: 26 })] }));
    children.push(new Paragraph({ children: [new TextRun({ text: r.notas, size: 22 })] }));
  }

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  downloadBlob(blob, `Receta_${slug(r.nombre)}.docx`);
  toast("Word descargado ✓");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function slug(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

// ============================================================
// ADMIN
// ============================================================
function enterAdmin() {
  adminMode = true;
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("adminScreen").classList.remove("hidden");
  renderClientList();
  renderRecetaClientSelect();
  renderLogoGrid();
  renderLogoForExportSelect();

  // Escuchar cambios en vivo mientras el admin está en pantalla
  listenLiveUpdates(() => {
    if (!adminMode) return;
    renderClientList();
    renderRecetaClientSelect();
    renderLogoGrid();
    renderLogoForExportSelect();
  });
}

function renderClientList() {
  const el = document.getElementById("clientList");
  if (STATE.clients.length === 0) {
    el.innerHTML = `<div class="empty-state">Aún no has creado ningún acceso de cliente.</div>`;
    return;
  }
  el.innerHTML = "";
  STATE.clients.slice().reverse().forEach(c => {
    const nRecipes = (STATE.recipes[c.id] || []).length;
    const div = document.createElement("div");
    div.className = "client-card";
    div.innerHTML = `
      <div>
        <div class="cc-name">${esc(c.name)} <span class="pill ${c.active ? 'pill-active' : 'pill-revoked'}">${c.active ? 'Activo' : 'Revocado'}</span></div>
        <div class="cc-pin">PIN: ${c.pin}</div>
        <div class="cc-meta">${nRecipes} receta${nRecipes === 1 ? '' : 's'} guardada${nRecipes === 1 ? '' : 's'}</div>
      </div>
      <div class="cc-actions">
        <button class="mini-btn" data-act="toggle" data-id="${c.id}">${c.active ? 'Revocar' : 'Reactivar'}</button>
        <button class="mini-btn" data-act="delete" data-id="${c.id}" style="color:#b3402f;">Eliminar</button>
      </div>
    `;
    el.appendChild(div);
  });
  el.querySelectorAll('[data-act="toggle"]').forEach(btn => {
    btn.onclick = async () => {
      const c = STATE.clients.find(x => x.id === btn.dataset.id);
      c.active = !c.active;
      await saveState();
      renderClientList();
      toast(c.active ? "Acceso reactivado" : "Acceso revocado");
    };
  });
  el.querySelectorAll('[data-act="delete"]').forEach(btn => {
    btn.onclick = () => {
      confirmModal(
        "Eliminar cliente",
        "Esto eliminará el acceso y todas sus recetas guardadas de forma permanente. ¿Continuar?",
        async () => {
          STATE.clients = STATE.clients.filter(x => x.id !== btn.dataset.id);
          delete STATE.recipes[btn.dataset.id];
          await saveState();
          renderClientList();
          renderRecetaClientSelect();
          toast("Cliente eliminado");
        }
      );
    };
  });
}

async function createClient() {
  const name = document.getElementById("newClientName").value.trim();
  const pin = document.getElementById("newClientPin").value.trim();
  if (!name) { toast("Escribe el nombre del cliente.", true); return; }
  if (!/^\d{4}$/.test(pin)) { toast("El PIN debe tener exactamente 4 dígitos.", true); return; }
  if (STATE.clients.some(c => c.pin === pin && c.active)) { toast("Ese PIN ya está en uso.", true); return; }

  const newClientId = uid("cli");
  STATE.clients.push({ id: newClientId, name, pin, active: true, createdAt: new Date().toISOString(), logoId: null });

  // Si el nombre coincide con Barra Maretazo, precargar su recetario de 54 platos
  if (name.trim().toLowerCase() === "barra maretazo") {
    STATE.recipes[newClientId] = JSON.parse(JSON.stringify(RECETAS_SEED_BM)).map(r => ({ ...r, id: uid("rec") }));
  }

  await saveState();
  document.getElementById("newClientName").value = "";
  document.getElementById("newClientPin").value = "";
  renderClientList();
  renderRecetaClientSelect();
  toast(name.trim().toLowerCase() === "barra maretazo" ? "Cliente creado con 54 platos precargados ✓" : "Cliente creado ✓");
}

function renderRecetaClientSelect() {
  const sel = document.getElementById("recetaClientSelect");
  sel.innerHTML = STATE.clients.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("") || `<option value="">Sin clientes</option>`;
  sel.onchange = renderRecetaListAdmin;
  renderRecetaListAdmin();
}

function renderRecetaListAdmin() {
  const sel = document.getElementById("recetaClientSelect");
  const clientId = sel.value;
  const el = document.getElementById("recetaListAdmin");
  const allRecipes = STATE.recipes[clientId] || [];
  const query = (document.getElementById("adminRecetaSearch")?.value || "").trim().toLowerCase();
  const recipes = query ? allRecipes.filter(r => r.nombre.toLowerCase().includes(query)) : allRecipes;

  if (allRecipes.length === 0) {
    el.innerHTML = `<div class="empty-state">Este cliente aún no tiene recetas guardadas.</div>`;
    return;
  }
  if (recipes.length === 0) {
    el.innerHTML = `<div class="empty-state">No se encontró ninguna receta con ese nombre.</div>`;
    return;
  }
  el.innerHTML = recipes.map(r => `
    <div class="recipe-admin-item">
      <div>
        <div class="ra-name">${esc(r.nombre)}</div>
        <div class="ra-meta">${esc(r.categoria || "Sin categoría")} · ${r.ingredientes.length} ingredientes</div>
      </div>
      <div class="cc-actions">
        <button class="mini-btn" data-radm="edit" data-id="${r.id}">Editar</button>
        <button class="mini-btn" data-radm="pdf" data-id="${r.id}">PDF</button>
        <button class="mini-btn" data-radm="excel" data-id="${r.id}">Excel</button>
        <button class="mini-btn" data-radm="word" data-id="${r.id}">Word</button>
      </div>
    </div>
  `).join("");

  el.querySelectorAll("[data-radm]").forEach(btn => {
    btn.onclick = () => {
      const r = allRecipes.find(x => x.id === btn.dataset.id);
      if (btn.dataset.radm === "excel") exportRecipeExcel(r);
      else if (btn.dataset.radm === "word") exportRecipeWord(r);
      else if (btn.dataset.radm === "edit") openAdminRecipeEditor(r, clientId);
      else exportRecipePdf(r);
    };
  });
}

function exportRecipePdf(r) {
  const logoId = document.getElementById("logoForExportSelect").value;
  const logo = STATE.logos.find(l => l.id === logoId);
  const logoUrl = logo ? logo.dataUrl : DEFAULT_LOGO;
  const win = window.open("", "_blank");
  win.document.write(`
    <!DOCTYPE html><html><head><meta charset="UTF-8"><title>${esc(r.nombre)}</title>
    <style>
      @page { size: A4; margin: 14mm; }
      body{font-family:'Helvetica Neue',Arial,sans-serif; color:#1B2A4A;}
      .r-head{border-bottom:3px solid #B8862B; padding-bottom:10px; margin-bottom:16px; display:flex; align-items:center; gap:12px;}
      .r-head img{width:36px; height:36px; border-radius:50%;}
      .r-head h1{font-size:22px; color:#1B2A4A;}
      .r-meta{color:#6b7080; font-size:12px; margin-bottom:14px;}
      .r-section-title{font-size:13px; text-transform:uppercase; letter-spacing:1px; color:#B8862B; font-weight:800; margin:18px 0 8px; border-left:4px solid #B8862B; padding-left:8px;}
      table{width:100%; border-collapse:collapse; font-size:12px;}
      th{background:#1B2A4A; color:#fff; padding:6px 8px; text-align:left; font-size:10.5px; text-transform:uppercase;}
      td{padding:6px 8px; border-bottom:1px solid #e3e2dc;}
      .paso{margin-bottom:8px; font-size:12.5px;}
      .paso b{color:#1B2A4A;}
      .notas{background:#FFFAF0; border:1px solid #B8862B; border-radius:6px; padding:10px 14px; font-size:12px; margin-top:10px;}
    </style></head><body>
    <div style="text-align:center; margin-bottom:20px;"><img src="${logoUrl}" style="width:60px; height:60px; border-radius:50%;"></div>
    ${recipePageHTML(r)}
    </body></html>
  `);
  win.document.close();
  setTimeout(() => win.print(), 400);
}

function renderLogoForExportSelect() {
  const sel = document.getElementById("logoForExportSelect");
  sel.innerHTML = `<option value="">Sin logo (usar genérico)</option>` +
    STATE.logos.map(l => `<option value="${l.id}">${esc(l.name)}</option>`).join("");
}

function renderLogoGrid() {
  const grid = document.getElementById("logoGrid");
  grid.innerHTML = "";
  STATE.logos.forEach(l => {
    const slot = document.createElement("div");
    slot.className = "logo-slot";
    slot.innerHTML = `<img src="${l.dataUrl}"><span class="ls-label">${esc(l.name)}</span><button class="ls-del">✕</button>`;
    slot.querySelector(".ls-del").onclick = async (e) => {
      e.stopPropagation();
      STATE.logos = STATE.logos.filter(x => x.id !== l.id);
      await saveState();
      renderLogoGrid();
      renderLogoForExportSelect();
    };
    grid.appendChild(slot);
  });
  const addSlot = document.createElement("div");
  addSlot.className = "logo-slot add";
  addSlot.textContent = "+";
  addSlot.onclick = () => document.getElementById("logoFileInput").click();
  grid.appendChild(addSlot);
}

document.getElementById("logoFileInput")?.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const name = prompt("Nombre para este logo (marca/cliente):", file.name.replace(/\.[^.]+$/, ""));
  if (!name) return;
  const reader = new FileReader();
  reader.onload = async () => {
    STATE.logos.push({ id: uid("logo"), name, dataUrl: reader.result });
    await saveState();
    renderLogoGrid();
    renderLogoForExportSelect();
    toast("Logo agregado ✓");
  };
  reader.readAsDataURL(file);
  e.target.value = "";
});

// ============================================================
// EXPORT: Recetario con diseño de marca (PDF vía ventana de impresión)
// ============================================================
function exportRecetarioBrandPdf() {
  const clientId = document.getElementById("recetaClientSelect").value;
  const client = STATE.clients.find(c => c.id === clientId);
  if (!client) { toast("Selecciona un cliente.", true); return; }
  const recipes = STATE.recipes[clientId] || [];
  if (recipes.length === 0) { toast("Este cliente no tiene recetas guardadas.", true); return; }

  const logoId = document.getElementById("logoForExportSelect").value;
  const logo = STATE.logos.find(l => l.id === logoId);
  const logoUrl = logo ? logo.dataUrl : DEFAULT_LOGO;

  const win = window.open("", "_blank");
  const pages = recipes.map(r => recipePageHTML(r)).join('<div style="page-break-after:always;"></div>');

  win.document.write(`
    <!DOCTYPE html><html><head><meta charset="UTF-8"><title>Recetario ${esc(client.name)}</title>
    <style>
      @page { size: A4; margin: 14mm; }
      body{font-family:'Helvetica Neue',Arial,sans-serif; color:#1B2A4A;}
      .cover{text-align:center; padding-top:200px;}
      .cover img{width:110px; height:110px; border-radius:50%; margin-bottom:24px;}
      .cover h1{font-size:34px; color:#1B2A4A; margin-bottom:6px;}
      .cover h2{font-size:18px; color:#B8862B; font-weight:600;}
      .r-head{border-bottom:3px solid #B8862B; padding-bottom:10px; margin-bottom:16px; display:flex; align-items:center; gap:12px;}
      .r-head img{width:36px; height:36px; border-radius:50%;}
      .r-head h1{font-size:22px; color:#1B2A4A;}
      .r-meta{color:#6b7080; font-size:12px; margin-bottom:14px;}
      .r-section-title{font-size:13px; text-transform:uppercase; letter-spacing:1px; color:#B8862B; font-weight:800; margin:18px 0 8px; border-left:4px solid #B8862B; padding-left:8px;}
      table{width:100%; border-collapse:collapse; font-size:12px;}
      th{background:#1B2A4A; color:#fff; padding:6px 8px; text-align:left; font-size:10.5px; text-transform:uppercase;}
      td{padding:6px 8px; border-bottom:1px solid #e3e2dc;}
      .paso{margin-bottom:8px; font-size:12.5px;}
      .paso b{color:#1B2A4A;}
      .notas{background:#FFFAF0; border:1px solid #B8862B; border-radius:6px; padding:10px 14px; font-size:12px; margin-top:10px;}
    </style></head><body>
    <div class="cover">
      <img src="${logoUrl}">
      <h1>Recetario</h1>
      <h2>${esc(client.name)}</h2>
    </div>
    <div style="page-break-after:always;"></div>
    ${pages}
    </body></html>
  `);
  win.document.close();
  setTimeout(() => win.print(), 400);
}

async function exportRecetarioExcel() {
  const clientId = document.getElementById("recetaClientSelect").value;
  const client = STATE.clients.find(c => c.id === clientId);
  if (!client) { toast("Selecciona un cliente.", true); return; }
  const recipes = STATE.recipes[clientId] || [];
  if (recipes.length === 0) { toast("Este cliente no tiene recetas guardadas.", true); return; }
  if (!(await ensureXLSX())) return;

  const wb = XLSX.utils.book_new();
  recipes.forEach((r, idx) => {
    const rows = [
      ["RECETA", r.nombre],
      ["Categoría", r.categoria || ""],
      ["Porciones", r.porciones || ""],
      ["Alérgenos", r.alergenos || ""],
      [],
      ["INGREDIENTES"],
      ["Ingrediente", "Cantidad", "Unidad"],
      ...r.ingredientes.map(i => [i.nombre, i.cantidad, i.unidad]),
      [],
      ["PROCEDIMIENTO"],
      ...r.pasos.map((p, i) => [`Paso ${i + 1}`, p]),
      [],
      ["NOTAS", r.notas || ""],
    ];
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws["!cols"] = [{ wch: 22 }, { wch: 40 }, { wch: 14 }];
    let sheetName = (idx + 1) + "_" + r.nombre.slice(0, 25);
    sheetName = sheetName.replace(/[\\\/\?\*\[\]:]/g, "").slice(0, 31);
    XLSX.utils.book_append_sheet(wb, ws, sheetName || `Receta ${idx + 1}`);
  });
  XLSX.writeFile(wb, `Recetario_${slug(client.name)}.xlsx`);
  toast("Recetario Excel descargado ✓");
}

async function exportRecetarioWord() {
  const clientId = document.getElementById("recetaClientSelect").value;
  const client = STATE.clients.find(c => c.id === clientId);
  if (!client) { toast("Selecciona un cliente.", true); return; }
  const recipes = STATE.recipes[clientId] || [];
  if (recipes.length === 0) { toast("Este cliente no tiene recetas guardadas.", true); return; }
  if (!(await ensureDocx())) return;

  const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, PageBreak, ImageRun, AlignmentType } = docx;

  function cellHead(t) {
    return new TableCell({
      shading: { fill: "1B2A4A" },
      children: [new Paragraph({ children: [new TextRun({ text: t, bold: true, color: "FFFFFF", size: 20 })] })],
    });
  }
  function cellBody(t) {
    return new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: String(t || ""), size: 20 })] })] });
  }

  const children = [
    new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Recetario", bold: true, color: "1B2A4A", size: 48 })] }),
    new Paragraph({ spacing: { after: 400 }, children: [new TextRun({ text: client.name, bold: true, color: "B8862B", size: 30 })] }),
  ];

  for (const r of recipes) {
    children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: r.nombre, bold: true, color: "1B2A4A", size: 36 })] }));

    if (r.foto) {
      const imgBytes = await fetchImageAsUint8Array(r.foto);
      if (imgBytes) {
        children.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 150, after: 200 },
          children: [ new ImageRun({ type: "jpg", data: imgBytes, transformation: { width: 440, height: 275 } }) ],
        }));
      }
    }

    children.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: `${r.categoria || "Sin categoría"} · ${r.porciones || "-"} porciones`, italics: true, size: 22, color: "6b7080" })] }));
    if (r.alergenos) {
      children.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Alérgenos: ", bold: true, size: 22 }), new TextRun({ text: r.alergenos, size: 22 })] }));
    }
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 }, children: [new TextRun({ text: "Ingredientes", bold: true, color: "B8862B", size: 26 })] }));
    const ingRows = [
      new TableRow({ children: [cellHead("Ingrediente"), cellHead("Cantidad"), cellHead("Unidad")] }),
      ...r.ingredientes.map(i => new TableRow({ children: [cellBody(i.nombre), cellBody(i.cantidad), cellBody(i.unidad)] })),
    ];
    children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: ingRows }));
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 }, children: [new TextRun({ text: "Procedimiento", bold: true, color: "B8862B", size: 26 })] }));
    r.pasos.forEach((p, i) => {
      children.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: `${i + 1}. `, bold: true, size: 22 }), new TextRun({ text: p, size: 22 })] }));
    });
    if (r.notas) {
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 100 }, children: [new TextRun({ text: "Notas", bold: true, color: "B8862B", size: 26 })] }));
      children.push(new Paragraph({ children: [new TextRun({ text: r.notas, size: 22 })] }));
    }
  }

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  downloadBlob(blob, `Recetario_${slug(client.name)}.docx`);
  toast("Recetario Word descargado ✓");
}

function recipePageHTML(r) {
  const ingRows = r.ingredientes.map(i => `<tr><td>${esc(i.nombre)}</td><td>${esc(i.cantidad)}</td><td>${esc(i.unidad)}</td></tr>`).join("");
  const pasos = r.pasos.map((p, i) => `<div class="paso"><b>${i + 1}.</b> ${esc(p)}</div>`).join("");
  const fotoHtml = r.foto ? `<img src="${r.foto}" style="width:100%; max-height:260px; object-fit:cover; border-radius:10px; margin-bottom:14px;">` : "";
  return `
    <div class="r-head"><h1>${esc(r.nombre)}</h1></div>
    ${fotoHtml}
    <div class="r-meta">${esc(r.categoria || "Sin categoría")} · ${esc(r.porciones || "-")} porciones ${r.alergenos ? " · Alérgenos: " + esc(r.alergenos) : ""}</div>
    <div class="r-section-title">Ingredientes</div>
    <table><tr><th>Ingrediente</th><th>Cantidad</th><th>Unidad</th></tr>${ingRows}</table>
    <div class="r-section-title">Procedimiento</div>
    ${pasos}
    ${r.notas ? `<div class="notas"><b>Notas:</b> ${esc(r.notas)}</div>` : ""}
  `;
}

// ============================================================
// MODALS
// ============================================================
function confirmModal(title, text, onOk) {
  document.getElementById("confirmTitle").textContent = title;
  document.getElementById("confirmText").textContent = text;
  document.getElementById("modalConfirm").classList.add("show");
  document.getElementById("confirmOk").onclick = () => {
    document.getElementById("modalConfirm").classList.remove("show");
    onOk();
  };
}
document.getElementById("confirmCancel").onclick = () => document.getElementById("modalConfirm").classList.remove("show");

// ============================================================
// INIT / EVENTS
// ============================================================
function waitForFirebase() {
  return new Promise((resolve) => {
    if (window.__firebaseReady) { resolve(); return; }
    window.addEventListener("firebase-ready", () => resolve(), { once: true });
    // Salvaguarda: si por algún motivo el evento no llega, no dejar la app colgada
    setTimeout(resolve, 4000);
  });
}

async function init() {
  await waitForFirebase();
  await loadState();
  document.getElementById("loginLogo").src = DEFAULT_LOGO;
  renderPinPad();
  renderPinDots();

  document.getElementById("gearBtn").onclick = () => {
    document.getElementById("modalAdminLogin").classList.add("show");
    document.getElementById("adminPassInput").value = "";
    document.getElementById("adminLoginError").textContent = "";
    document.getElementById("adminPassInput").focus();
  };
  document.getElementById("adminLoginCancel").onclick = () => document.getElementById("modalAdminLogin").classList.remove("show");
  document.getElementById("adminLoginOk").onclick = () => {
    const val = document.getElementById("adminPassInput").value;
    if (val === ADMIN_PASSWORD) {
      document.getElementById("modalAdminLogin").classList.remove("show");
      enterAdmin();
    } else {
      document.getElementById("adminLoginError").textContent = "Clave incorrecta.";
    }
  };
  document.getElementById("adminPassInput").addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("adminLoginOk").click();
  });

  document.getElementById("logoutBtn").onclick = () => {
    if (returnToAdminAfterSave) {
      returnToAdminAfterSave = false;
      editingRecipeId = null;
      editingClientId = null;
      document.getElementById("logoutBtn").textContent = "Salir";
      document.getElementById("appScreen").classList.add("hidden");
      document.getElementById("adminScreen").classList.remove("hidden");
      renderClientList();
      renderRecetaListAdmin();
      return;
    }
    currentClient = null;
    document.getElementById("appScreen").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
    pinBuffer = "";
    renderPinDots();
  };
  document.getElementById("adminLogoutBtn").onclick = () => {
    adminMode = false;
    if (unsubscribeSnapshot) { unsubscribeSnapshot(); unsubscribeSnapshot = null; }
    document.getElementById("adminScreen").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
    pinBuffer = "";
    renderPinDots();
  };

  document.getElementById("addIngBtn").onclick = () => addIngredientRow();
  document.getElementById("addStepBtn").onclick = () => addStepRow();
  setupPhotoBox();
  document.getElementById("saveBtn").onclick = saveRecipe;
  document.getElementById("clearBtn").onclick = () => {
    confirmModal("Limpiar formulario", "Se borrará todo lo escrito (no afecta recetas ya guardadas). ¿Continuar?", clearForm);
  };

  document.getElementById("createClientBtn").onclick = createClient;
  document.getElementById("exportRecetarioPdfBtn").onclick = exportRecetarioBrandPdf;
  document.getElementById("exportRecetarioExcelBtn").onclick = exportRecetarioExcel;
  document.getElementById("exportRecetarioWordBtn").onclick = exportRecetarioWord;

  document.getElementById("savedSearch")?.addEventListener("input", () => renderSavedList());
  document.getElementById("adminRecetaSearch")?.addEventListener("input", () => renderRecetaListAdmin());

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll('[id^="tab-"]').forEach(t => t.classList.add("hidden"));
      document.getElementById("tab-" + btn.dataset.tab).classList.remove("hidden");
    };
  });
}

init();
