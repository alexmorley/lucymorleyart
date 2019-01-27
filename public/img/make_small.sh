for i in `ls *jpg`; do
    convert $i -resize 50% small_$i
done
