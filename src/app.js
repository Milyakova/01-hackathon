import './styles.css'

import {ContextMenu} from "@/menu"
import {SoundModule} from "@/modules/sound.module";
import {BackgroundModule} from "@/modules/background.module";
import {ShapeModule} from "@/modules/shape.module";

const contextMenu = new ContextMenu("#menu")

contextMenu.add(new SoundModule('sound', 'Случайный звук'))
contextMenu.add(new BackgroundModule('bg', 'Случайный фон'))
contextMenu.add(new ShapeModule('shape', 'Случайная фигура'))