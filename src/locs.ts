export interface LocsMap {
  [key: string]: {
    name: string;
    center: {
      lat: string;
      lon: string;
    };
    wards?: {
      [key: string]: {
        name: string;
        center: {
          lat: string;
          lon: string;
        };

      };
    };
  };
}

export const locs:LocsMap = {
  "00": {
    "name": "Abaji Area Council",
    "center": {
      "lat": "8.6040",
      "lon": "6.4204"
    },
    "wards": {
      "00": {
        "name": "Abaji Central",
        "center": {
          "lat": "8.3863",
          "lon": "6.9256"
        }
      },
      "01": {
        "name": "Abaji North East",
        "center": {
          "lat": "8.3929",
          "lon": "6.9409"
        }
      },
      "02": {
        "name": "Abaji South East",
        "center": {
          "lat": "8.3687",
          "lon": "6.9365"
        }
      },
      "03": {
        "name": "Agyana/Pandagi",
        "center": {
          "lat": "8.3759",
          "lon": "6.9071"
        }
      },
      "04": {
        "name": "Rimba Ebagi",
        "center": {
          "lat": "8.3434",
          "lon": "6.9543"
        }
      },
      "05": {
        "name": "Nuku",
        "center": {
          "lat": "8.3605",
          "lon": "6.8831"
        }
      },
      "06": {
        "name": "Alu Mamagi",
        "center": {
          "lat": "8.3595",
          "lon": "6.9227"
        }
      },
      "07": {
        "name": "Yaba",
        "center": {
          "lat": "8.3326",
          "lon": "6.8464"
        }
      },
      "08": {
        "name": "Gurdi",
        "center": {
          "lat": "8.3515",
          "lon": "6.8804"
        }
      },
      "09": {
        "name": "Gawu",
        "center": {
          "lat": "8.3552",
          "lon": "6.8771"
        }
      }
    }
  },
  "01": {
    "name": "Abuja Municipal Area Council (AMAC)",
    "center": {
      "lat": "9.0765",
      "lon": "7.3986"
    },
    "wards": {
      "00": {
        "name": "City Centre",
        "center": {
          "lat": "9.0711",
          "lon": "7.4780"
        }
      },
      "01": {
        "name": "Garki",
        "center": {
          "lat": "9.0638",
          "lon": "7.4584"
        }
      },
      "02": {
        "name": "Kabusa",
        "center": {
          "lat": "9.0491",
          "lon": "7.4431"
        }
      },
      "03": {
        "name": "Wuse",
        "center": {
          "lat": "9.0726",
          "lon": "7.4898"
        }
      },
      "04": {
        "name": "Gwarinpa",
        "center": {
          "lat": "9.1063",
          "lon": "7.4086"
        }
      },
      "05": {
        "name": "Jiwa",
        "center": {
          "lat": "8.9902",
          "lon": "7.4119"
        }
      },
      "06": {
        "name": "Gui",
        "center": {
          "lat": "9.0965",
          "lon": "7.3642"
        }
      },
      "07": {
        "name": "Karshi",
        "center": {
          "lat": "9.0336",
          "lon": "7.5032"
        }
      },
      "08": {
        "name": "Orozo",
        "center": {
          "lat": "9.0780",
          "lon": "7.4849"
        }
      },
      "09": {
        "name": "Karu",
        "center": {
          "lat": "9.0135",
          "lon": "7.4952"
        }
      },
      "10": {
        "name": "Nyanya",
        "center": {
          "lat": "9.0311",
          "lon": "7.5356"
        }
      },
      "11": {
        "name": "Gwagwa",
        "center": {
          "lat": "9.0414",
          "lon": "7.4304"
        }
      }
    }
  },
  "02": {
    "name": "Bwari Area Council",
    "center": {
      "lat": "9.2090",
      "lon": "7.3356"
    },
    "wards": {
      "00": {
        "name": "Bwari Central",
        "center": {
          "lat": "9.2900",
          "lon": "7.3944"
        }
      },
      "01": {
        "name": "Kuduru",
        "center": {
          "lat": "9.3184",
          "lon": "7.3943"
        }
      },
      "02": {
        "name": "Igu",
        "center": {
          "lat": "9.2445",
          "lon": "7.3936"
        }
      },
      "03": {
        "name": "Shere",
        "center": {
          "lat": "9.2609",
          "lon": "7.4131"
        }
      },
      "04": {
        "name": "Kawu",
        "center": {
          "lat": "9.3033",
          "lon": "7.3798"
        }
      },
      "05": {
        "name": "Ushafa",
        "center": {
          "lat": "9.2541",
          "lon": "7.3342"
        }
      },
      "06": {
        "name": "Dutse Alhaji",
        "center": {
          "lat": "9.2556",
          "lon": "7.3685"
        }
      },
      "07": {
        "name": "Byazhin",
        "center": {
          "lat": "9.2273",
          "lon": "7.3419"
        }
      },
      "08": {
        "name": "Kubwa",
        "center": {
          "lat": "9.1507",
          "lon": "7.2762"
        }
      },
      "09": {
        "name": "Usuma",
        "center": {
          "lat": "9.1576",
          "lon": "7.4488"
        }
      }
    }
  },
  "03": {
    "name": "Gwagwalada Area Council",
    "center": {
      "lat": "8.9568",
      "lon": "7.0811"
    },
    "wards": {
      "00": {
        "name": "Gwagwalada Center",
        "center": {
          "lat": "8.9453",
          "lon": "7.0753"
        }
      },
      "01": {
        "name": "Kutunku",
        "center": {
          "lat": "8.9541",
          "lon": "7.0819"
        }
      },
      "02": {
        "name": "Staff Quarters",
        "center": {
          "lat": "8.9505",
          "lon": "7.0738"
        }
      },
      "03": {
        "name": "Ibwa",
        "center": {
          "lat": "8.9216",
          "lon": "7.0708"
        }
      },
      "04": {
        "name": "Dobi",
        "center": {
          "lat": "8.9282",
          "lon": "7.0474"
        }
      },
      "05": {
        "name": "Paiko",
        "center": {
          "lat": "8.8955",
          "lon": "7.0445"
        }
      },
      "06": {
        "name": "Tungan Maje",
        "center": {
          "lat": "8.9128",
          "lon": "7.0763"
        }
      },
      "07": {
        "name": "Zuba",
        "center": {
          "lat": "8.9804",
          "lon": "7.1431"
        }
      },
      "08": {
        "name": "Ikwa",
        "center": {
          "lat": "8.9459",
          "lon": "7.1231"
        }
      },
      "09": {
        "name": "Gwako",
        "center": {
          "lat": "8.9222",
          "lon": "7.0966"
        }
      }
    }
  },
  "04": {
    "name": "Kuje Area Council",
    "center": {
      "lat": "8.8726",
      "lon": "7.2337"
    },
    "wards": {
      "00": {
        "name": "Kuje",
        "center": {
          "lat": "8.8718",
          "lon": "7.2190"
        }
      },
      "01": {
        "name": "Chibiri",
        "center": {
          "lat": "8.8803",
          "lon": "7.2442"
        }
      },
      "02": {
        "name": "Gaube",
        "center": {
          "lat": "8.8922",
          "lon": "7.2237"
        }
      },
      "03": {
        "name": "Kwaku",
        "center": {
          "lat": "8.9068",
          "lon": "7.1968"
        }
      },
      "04": {
        "name": "Kabi",
        "center": {
          "lat": "8.8922",
          "lon": "7.1864"
        }
      },
      "05": {
        "name": "Rubochi",
        "center": {
          "lat": "8.9386",
          "lon": "7.2576"
        }
      },
      "06": {
        "name": "Gwargwada",
        "center": {
          "lat": "8.9319",
          "lon": "7.1989"
        }
      },
      "07": {
        "name": "Gudun Karya",
        "center": {
          "lat": "8.9195",
          "lon": "7.1745"
        }
      },
      "08": {
        "name": "Kujekwa",
        "center": {
          "lat": "8.8992",
          "lon": "7.1684"
        }
      },
      "09": {
        "name": "Yenche",
        "center": {
          "lat": "8.8506",
          "lon": "7.2268"
        }
      }
    }
  },
  "05": {
    "name": "Kwali Area Council",
    "center": {
      "lat": "8.8399",
      "lon": "7.0611"
    },
    "wards": {
      "00": {
        "name": "Kwali Ward",
        "center": {
          "lat": "8.8105",
          "lon": "7.0377"
        }
      },
      "01": {
        "name": "Yangoji",
        "center": {
          "lat": "8.7421",
          "lon": "7.1331"
        }
      },
      "02": {
        "name": "Pai",
        "center": {
          "lat": "8.7646",
          "lon": "7.1773"
        }
      },
      "03": {
        "name": "Kilankwa",
        "center": {
          "lat": "8.7246",
          "lon": "7.0654"
        }
      },
      "04": {
        "name": "Dafa",
        "center": {
          "lat": "8.8455",
          "lon": "7.0027"
        }
      },
      "05": {
        "name": "Kundu",
        "center": {
          "lat": "8.7391",
          "lon": "7.0445"
        }
      },
      "06": {
        "name": "Ashara",
        "center": {
          "lat": "8.8005",
          "lon": "7.0547"
        }
      },
      "07": {
        "name": "Gumbo",
        "center": {
          "lat": "8.8424",
          "lon": "7.0472"
        }
      },
      "08": {
        "name": "Wako",
        "center": {
          "lat": "8.7789",
          "lon": "7.0256"
        }
      },
      "09": {
        "name": "Yebu",
        "center": {
          "lat": "8.7914",
          "lon": "7.0933"
        }
      }
    }
  }
}