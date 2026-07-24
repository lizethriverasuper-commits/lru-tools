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

const DEFAULT_LOGO = "data:image/svg+xml;base64," + btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle cx="100" cy="100" r="98" fill="#1B2A4A"/>
  <text x="100" y="112" font-family="Arial" font-size="70" font-weight="bold" fill="#B8862B" text-anchor="middle">L</text>
</svg>`);

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

function clearForm() {
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

  const recipeId = uid("rec");
  const fotoUrl = await uploadPhotoIfNeeded(recipeId);

  const recipe = {
    id: recipeId,
    foto: fotoUrl || "",
    ...data,
    savedAt: new Date().toISOString(),
  };

  if (!STATE.recipes[currentClient.id]) STATE.recipes[currentClient.id] = [];
  STATE.recipes[currentClient.id].push(recipe);
  await saveState();

  toast("Receta guardada ✓");
  clearForm();
  renderSavedList();
}

function renderSavedList() {
  const list = document.getElementById("savedList");
  const recipes = STATE.recipes[currentClient.id] || [];
  if (recipes.length === 0) {
    list.innerHTML = `<div class="empty-state">Aún no has guardado ninguna receta.</div>`;
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
        <button class="mini-btn" data-action="excel" data-id="${r.id}">Excel</button>
        <button class="mini-btn" data-action="word" data-id="${r.id}">Word</button>
      </div>
    `;
    list.appendChild(item);
  });
  list.querySelectorAll("[data-action]").forEach(btn => {
    btn.onclick = () => {
      const r = recipes.find(x => x.id === btn.dataset.id);
      if (btn.dataset.action === "excel") exportRecipeExcel(r);
      else exportRecipeWord(r);
    };
  });
}

// ============================================================
// EXPORT: single recipe -> Excel
// ============================================================
function exportRecipeExcel(r) {
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
  const recipes = STATE.recipes[clientId] || [];
  if (recipes.length === 0) {
    el.innerHTML = `<div class="empty-state">Este cliente aún no tiene recetas guardadas.</div>`;
    return;
  }
  el.innerHTML = recipes.map(r => `
    <div class="recipe-admin-item">
      <div>
        <div class="ra-name">${esc(r.nombre)}</div>
        <div class="ra-meta">${esc(r.categoria || "Sin categoría")} · ${r.ingredientes.length} ingredientes</div>
      </div>
      <div class="cc-actions">
        <button class="mini-btn" data-radm="pdf" data-id="${r.id}">PDF</button>
        <button class="mini-btn" data-radm="excel" data-id="${r.id}">Excel</button>
        <button class="mini-btn" data-radm="word" data-id="${r.id}">Word</button>
      </div>
    </div>
  `).join("");

  el.querySelectorAll("[data-radm]").forEach(btn => {
    btn.onclick = () => {
      const r = recipes.find(x => x.id === btn.dataset.id);
      if (btn.dataset.radm === "excel") exportRecipeExcel(r);
      else if (btn.dataset.radm === "word") exportRecipeWord(r);
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

function exportRecetarioExcel() {
  const clientId = document.getElementById("recetaClientSelect").value;
  const client = STATE.clients.find(c => c.id === clientId);
  if (!client) { toast("Selecciona un cliente.", true); return; }
  const recipes = STATE.recipes[clientId] || [];
  if (recipes.length === 0) { toast("Este cliente no tiene recetas guardadas.", true); return; }

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
