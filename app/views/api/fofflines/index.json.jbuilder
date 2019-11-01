@fofflines.each do |foffline|
  json.set! foffline.id do
    json.partial! 'api/fofflines/foffline', foffline: foffline
  end
end
